import Link from 'next/link'
import Footer from '../footer/footer-pc'

export default function Navigation(props) {
    let model = [{ href: "/about/", text: "渓水寮とは", icon: "info" },
    { text: "寮生活（一時閉鎖中）", icon: "diversity_3", disabled: true },
    { href: "/meals/", text: "食事", icon: "set_meal" },
    { href: "/facilities/", text: "設備", icon: "door_open" },
    { href: "/location/", text: "通学・周辺施設", icon: "store" },
    { text: "よくある質問（一時閉鎖中）", icon: "help", disabled: true }]
    let selected = model.find(i => i.href == props.id)
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
            : <Link href={i.href} key={i.text} className="nav-link" selected={i.selected}>{content}</Link>)
    }
    return (
        <div className='nav-wrapper'>
            <Link href="/apply/" className="nav-link fab-apply"><span className="material-symbols-rounded nav-icon">
                            campaign
                        </span>募集要項</Link>
            <nav id="nav-container" className="nav">
                <Link href="/" className="nav-idt icon-text">

                    <svg className="idt-logo" width="40" height="32">
                        <use href="#ymca-logo" />
                    </svg>
                    <h2 className="idt-text">渓水寮</h2>

                </Link>
                <div>
                    {links}
                    <Link href="/apply/" className="nav-link nav-apply"><span className="material-symbols-rounded nav-icon">
                            campaign
                        </span>募集要項</Link>
                    <div className="nav-sns-box">
                        <Link href="https://lin.ee/6XMmw9l"><img className="nav-sns" src="/line.png" alt="LINE"></img></Link>
                        <Link href="https://twitter.com/keisuiryo"><img className="nav-sns" src="/twitter.png" alt="Twitter"></img></Link>
                        <Link href="https://instagram.com/keisuiryo"><img className="nav-sns" src="/instagram.png" alt="Instagram"></img></Link>
                    </div>
                    <span className="nav-link nav-op nav-link-disabled" aria-disabled="true"><span className="material-symbols-rounded nav-icon">
                            school
                        </span>卒寮生用サイト（一時閉鎖中）</span>
                </div>
            </nav>
            <div className='mobile'><Footer /></div>
        </div>
    );
}
