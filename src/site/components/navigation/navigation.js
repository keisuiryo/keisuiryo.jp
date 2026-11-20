import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../footer/footer-pc'

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

    let model = [{ href: "/about/", text: "東北地区YMCA寮とは", icon: "info" },
    { href: "/life/", text: "寮生活", icon: "diversity_3" },
    { href: "/meals/", text: "食事", icon: "set_meal" },
    { href: "/facilities/", text: "設備", icon: "door_open" },
    { href: "/location/", text: "通学・周辺施設", icon: "store" },
    { href: "/events/", text: "行事", icon: "event" },
    { href: "/faq/", text: "よくある質問", icon: "help" }]
    let selected = model.find(i => i.href && i.href.replace(/^\/+|\/+$/g, '') == props.id)
    for (let i of model) {
        i.selected = false
    }
    if (selected)
        selected.selected = true
    let links = []
    for (const i of model) {
        const content = <><span className="material-symbols-rounded nav-icon">
                {i.icon}
            </span>{i.text}</>
        links.push(i.disabled
            ? <span key={i.text} className="nav-link nav-link-disabled" aria-disabled="true">{content}</span>
            : <Link href={i.href} key={i.text} className="nav-link" selected={i.selected} onClick={closeMenu}>{content}</Link>)
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
            <nav id="nav-container" className="nav">
                <Link href="/" className="nav-idt icon-text" onClick={closeMenu}>

                    <svg className="idt-logo" width="40" height="32">
                        <use href="#ymca-logo" />
                    </svg>
                    <h2 className="idt-text">渓水寮</h2>

                </Link>
                <div>
                    {links}
                <Link href="/apply/" className="nav-link nav-apply" onClick={closeMenu}><span className="material-symbols-rounded nav-icon">
                            campaign
                        </span>募集要項</Link>
                    <p className="nav-wiki-label">もっと知る</p>
                    <Link href="/wiki/" className="nav-link" onClick={closeMenu}><span className="material-symbols-rounded nav-icon">menu_book</span>Wiki記事</Link>
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
