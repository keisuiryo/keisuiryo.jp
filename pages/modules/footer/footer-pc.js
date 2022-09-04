import Link from 'next/link'

export default function Footer(props) {
    return (
        <footer className="footer-box">
                <p className="footer-name icon-text">
                    <img loading="lazy" width="42" height="34" className="name-logo" alt="東北大学YMCA渓水寮のロゴ(ポジティブY)"
                        src="/ymca-logo.webp" />
                    <span className="footer-name-name">東北大学YMCA渓水寮</span>
                </p>
                <address className="footer-adderss">
                    <Link href="mailto:ryo@keisuiryo.jp">
                        <a className="address-content"><span className="material-symbols-rounded nav-icon">
                            mail
                        </span>ryo@keisuiryo.jp</a>
                    </Link>
                    <Link href="tel:+810202293564">
                        <a className="address-content"><span className="material-symbols-rounded nav-icon">
                            call
                        </span>022-249-3564</a>
                    </Link>
                    <Link href="https://goo.gl/maps/oE32XoqM3sEwuCyaA" className="address-content">
                        <a className="address-content">
                        <span className="material-symbols-rounded nav-icon">
                            near_me
                        </span>
                        〒982-0027<br />仙台市太白区大塒町8-1東北大学YMCA渓水寮</a>
                    </Link>
                </address>
                <div className="nav-sns-box">
                        <Link href="https://lin.ee/6XMmw9l"><a><img className="nav-sns" src="/line.png" alt="LINE"></img></a></Link>
                        <Link href="https://twitter.com/keisuiryo"><a><img className="nav-sns" src="/twitter.png" alt="Twitter"></img></a></Link>
                        <Link href="https://instagram.com/keisuiryo"><a><img className="nav-sns" src="/instagram.png" alt="Instagram"></img></a></Link>
                </div>
        </footer>
    )
}