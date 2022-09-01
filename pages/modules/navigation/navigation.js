import Link from 'next/link'
import Footer from '../footer/footer-pc'

export default function Navigation(props) {
    let model = [{ href: "about", text: "渓水寮とは", icon: "info" },
    { href: "meals", text: "食事", icon: "set_meal" },
    { href: "events", text: "行事", icon: "diversity_3" },
    { href: "facilities", text: "設備", icon: "door_open" },
    { href: "location", text: "通学・周辺施設", icon: "store" },
    { href: "messages", text: "寮生の声", icon: "group" },
    { href: "faq", text: "FAQ", icon: "help" }]
    let selected = model.find(i => i.href == props.id)
    for (let i of model) {
        i.selected = false
    }
    if (selected)
        selected.selected = true
    let links = []
    for (const i of model) {
        links.push(<Link href={"/" + i.href + "/"}><a className="nav-link" selected={i.selected}><span className="material-symbols-rounded nav-icon">
            {i.icon}
        </span>{i.text}</a></Link>)
    }
    return (
        <div className='nav-wrapper'>
            <nav id="nav-container" className="nav">
                <Link href="/">
                    <a className="nav-idt icon-text">
                        <svg className="idt-logo" width="40" height="32">
                            <use href="#ymca-logo" />
                        </svg>
                        <h2 className="idt-text">渓水寮</h2>
                    </a>
                </Link>
                <div>
                    {links}
                    <Link href="/apply/"><a className="nav-link nav-apply"><span className="material-symbols-rounded nav-icon">
                        campaign
                    </span>募集要項</a></Link>
                    <div className="nav-sns-box">
                        <Link href="https://lin.ee/6XMmw9l"><a><img className="nav-sns" src="/line.png" alt="LINE"></img></a></Link>
                        <Link href="https://twitter.com/keisuiryo"><a><img className="nav-sns" src="/twitter.png" alt="Twitter"></img></a></Link>
                        <Link href="https://instagram.com/keisuiryo"><a><img className="nav-sns" src="/instagram.png" alt="Instagram"></img></a></Link>
                    </div>
                    <Link href="https://keisuiroop.studio.site/"><a className="nav-link nav-op"><span className="material-symbols-rounded nav-icon">
                        school
                    </span>卒寮生の方へ</a></Link>
                </div>
            </nav>
            <div className='mobile'><Footer /></div>
        </div>
    )
}