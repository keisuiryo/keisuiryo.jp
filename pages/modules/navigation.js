import Link from 'next/link'

export const config= {
  unstable_runtimeJS: true
}
export default function Footer(props) {
    let model = [{ href: "about", text: "渓水寮とは"},
    { href: "meals", text: "食事" },
    { href: "events", text: "行事" },
    { href: "facilities", text: "設備" },
    { href: "location", text: "通学・周辺施設" },
    { href: "messages", text: "寮生の声" },
    { href: "faq", text: "FAQ" }]
    let selected = model.find(i => i.href == props.id)
    for(let i of model) {
        i.selected = false
    }
    if(selected)
        selected.selected = true
    let links = []
    for(const i of model) {
        links.push(<Link href={"/"+i.href+"/"}><a className="nav-link" selected={i.selected}>{i.text}</a></Link>)
    }
    return (
        <div id="nav-container">
            <nav className="nav">
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
                    <Link href="/apply/"><a className="nav-link-fab btn">募集要項→</a></Link>
                    <Link href="https://twitter.com/keisuiryo"><a className="nav-link btn btn-twitter" >Twitter</a></Link>
                </div>
            </nav >
        <div></div>
        </div >
    )
}