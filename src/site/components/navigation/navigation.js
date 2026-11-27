import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../footer/footer-pc'
import navigation from '../../../../content/site/navigation.json'

// Existing pages carry their parent link in their page registrations.
const registrations = require.context('../../../../content/wiki', true, /pages\.json$/)
const registeredPages = registrations.keys().flatMap(key => registrations(key))

export default function Navigation(props) {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = menuOpen ? 'hidden' : originalOverflow
        if (menuOpen) {
            const closeOnEscape = event => {
                if (event.key === 'Escape') setMenuOpen(false)
            }
            document.addEventListener('keydown', closeOnEscape)
            return () => {
                document.body.style.overflow = originalOverflow
                document.removeEventListener('keydown', closeOnEscape)
            }
        }
        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [menuOpen])

    function closeMenu() {
        setMenuOpen(false)
    }

    const ancestors = new Set((props.breadcrumbs || []).map(item => item.href))
    const currentRoute = props.id ? `/${props.id.replace(/^\/+|\/+$/g, '')}/` : '/'
    if (!props.breadcrumbs) {
        let page = registeredPages.find(item => item.route === currentRoute)
        const visited = new Set()
        while (page?.parent && !visited.has(page.route)) {
            visited.add(page.route)
            ancestors.add(page.parent.href)
            const parentRoute = page.parent.href.split('#')[0].replace(/\/$/, '') + '/'
            page = registeredPages.find(item => item.route === parentRoute)
        }
    }

    return (
        <div className={`nav-wrapper${menuOpen ? ' nav-open' : ''}`}>
            <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={menuOpen} aria-controls="nav-container">
                <span></span><span></span><span></span>
            </button>
            {menuOpen && <button type="button" className="nav-backdrop" onClick={closeMenu} aria-label="メニューを閉じる" />}
            <nav id="nav-container" className="nav" aria-label="渓水寮サイトナビゲーション">
                <Link href="/" className="nav-idt icon-text" onClick={closeMenu}>

                    <svg className="idt-logo" width="40" height="32">
                        <use href="#ymca-logo" />
                    </svg>
                    <h2 className="idt-text">
                        <span className="idt-org">東北地区学生YMCA</span>
                        <span className="idt-dorm">渓水寮</span>
                    </h2>

                </Link>
                <Link href="/" className="nav-home-link" aria-current={!props.id ? 'page' : undefined} onClick={closeMenu}>
                    トップページ <span aria-hidden="true">↗</span>
                </Link>
                <div className="nav-wiki-menu">
                    <Link className="nav-wiki-label" href={navigation.label.href} onClick={closeMenu}>
                        {navigation.label.title} <span aria-hidden="true">↗</span>
                    </Link>
                    <ul className="nav-wiki-links" aria-label="Wikiの分類">
                        {navigation.items.map((category, index) => (
                            <li key={category.href}>
                                <Link
                                    href={category.href}
                                    aria-current={ancestors.has(category.href) ? 'location' : undefined}
                                    onClick={closeMenu}
                                >
                                    <span className="nav-wiki-number">0{index + 1}</span>
                                    <span>{category.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-wiki-actions">
                        <a className="nav-wiki-action nav-wiki-action-contact" href="https://lin.ee/6XMmw9l" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                            お問い合わせ <span aria-hidden="true">↗</span>
                        </a>
                        <Link className="nav-wiki-action nav-wiki-action-apply" href="/apply/" onClick={closeMenu}>
                            募集要項 <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='mobile'><Footer /></div>
        </div>
    );
}
