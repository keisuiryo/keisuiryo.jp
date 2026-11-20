import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../footer/footer-pc'

const navGroups = [
    {
        id: 'about',
        title: '渓水寮について',
        items: [
            { href: '/about/', text: '寮の概要', icon: 'info' }
        ]
    },
    {
        id: 'daily-life',
        title: '寮生活',
        items: [
            { href: '/life/', text: '寮生活・自治', icon: 'diversity_3' },
            { href: '/meals/', text: '食卓と食事', icon: 'set_meal' },
            { href: '/messages/', text: '寮生の声', icon: 'forum' }
        ]
    },
    {
        id: 'events',
        title: '行事',
        items: [
            { href: '/events/', text: '行事の紹介', icon: 'event' }
        ]
    },
    {
        id: 'conditions',
        title: '施設・条件',
        items: [
            { href: '/facilities/', text: '施設・個室', icon: 'door_open' },
            { href: '/compare/', text: '住まいと生活費の比較', icon: 'payments' },
            { href: '/location/', text: '通学・周辺施設', icon: 'store' }
        ]
    },
    {
        id: 'visit',
        title: '訪ねてみませんか',
        items: [
            { href: 'https://lin.ee/6XMmw9l', text: '見学・お問い合わせ', icon: 'mail', external: true },
            { href: '/apply/', text: '募集要項', icon: 'campaign', prominent: true },
            { href: '/faq/', text: 'よくある質問', icon: 'help' }
        ]
    },
    {
        id: 'more',
        title: 'より詳しく',
        items: [
            { href: '/wiki/', text: '渓水寮Wiki', icon: 'menu_book' }
        ]
    }
]

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

    function renderNavLink(item) {
        const pageId = item.href.startsWith('/') ? item.href.replace(/^\/+|\/+$/g, '') : ''
        const selected = Boolean(pageId && pageId === props.id)
        const className = `nav-link${item.prominent ? ' nav-apply' : ''}`
        const content = <>
            <span className="material-symbols-rounded nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-link-text">{item.text}</span>
        </>

        return <li key={item.href}>
            {item.external
                ? <a href={item.href} className={className} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{content}</a>
                : <Link href={item.href} className={className} selected={selected} onClick={closeMenu}>{content}</Link>}
        </li>
    }
    return (
        <div className={`nav-wrapper${menuOpen ? ' nav-open' : ''}`}>
            <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={menuOpen} aria-controls="nav-container">
                <span></span><span></span><span></span>
            </button>
            {menuOpen && <button type="button" className="nav-backdrop" onClick={closeMenu} aria-label="メニューを閉じる" />}
            <Link href="/apply/" className="nav-link fab-apply" onClick={closeMenu}><span className="material-symbols-rounded nav-icon">
                            campaign
                        </span>募集要項</Link>
            <nav id="nav-container" className="nav" aria-label="サイトナビゲーション">
                <Link href="/" className="nav-idt icon-text" onClick={closeMenu}>

                    <svg className="idt-logo" width="40" height="32">
                        <use href="#ymca-logo" />
                    </svg>
                    <h2 className="idt-text">渓水寮</h2>

                </Link>
                <div className="nav-groups">
                    {navGroups.map(group => (
                        <section className="nav-group" aria-labelledby={`nav-group-${group.id}`} key={group.id}>
                            <h3 className="nav-group-title" id={`nav-group-${group.id}`}>{group.title}</h3>
                            <ul className="nav-group-links">
                                {group.items.map(renderNavLink)}
                            </ul>
                        </section>
                    ))}
                    <div className="nav-sns-box">
                        <Link href="https://lin.ee/6XMmw9l" onClick={closeMenu}><img className="nav-sns" src="/line.png" alt="LINE"></img></Link>
                        <Link href="https://twitter.com/keisuiryo" onClick={closeMenu}><img className="nav-sns" src="/twitter.png" alt="Twitter"></img></Link>
                        <Link href="https://instagram.com/keisuiryo" onClick={closeMenu}><img className="nav-sns" src="/instagram.png" alt="Instagram"></img></Link>
                    </div>
                </div>
            </nav>
            <div className='mobile'><Footer /></div>
        </div>
    );
}
