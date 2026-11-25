import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../footer/footer-pc'

const wikiCategories = [
    { order: 10, title: '理念・背景' },
    { order: 20, title: '暮らし' },
    { order: 30, title: '費用・入寮' },
    { order: 40, title: 'つぶやき' }
]

const pageCategory = {
    about: '理念・背景',
    'why-keisui': '理念・背景',
    'keisui-philosophy': '理念・背景',
    'dormitory-spirit': '理念・背景',
    life: '暮らし',
    meals: '暮らし',
    facilities: '暮らし',
    location: '暮らし',
    events: '暮らし',
    messages: '暮らし',
    apply: '費用・入寮',
    compare: '費用・入寮',
    'living-cost-comparison': '費用・入寮',
    faq: '費用・入寮',
    'new-dorm-thought': 'つぶやき'
}

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

    const currentCategory = props.wikiCategory || pageCategory[props.id]

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
                    <Link className="nav-wiki-label" href="/wiki/" onClick={closeMenu}>
                        渓水寮Wiki <span aria-hidden="true">↗</span>
                    </Link>
                    <ul className="nav-wiki-links" aria-label="Wikiの分類">
                        {wikiCategories.map((category, index) => (
                            <li key={category.order}>
                                <Link
                                    href={`/wiki/#wiki-category-${category.order}`}
                                    aria-current={currentCategory === category.title ? 'location' : undefined}
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
