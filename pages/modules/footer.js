import Link from 'next/link'


export const config= {
  unstable_runtimeJS: true
}
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
                    <a className="icon-text address-content"><svg className="address-icon">
                        <use href="#svg-email" />
                    </svg>ryo@keisuiryo.jp</a>
                </Link>
                <Link href="tel:+810202293564">
                    <a className="icon-text address-content"><svg className="address-icon">
                        <use href="#svg-tel" />
                    </svg>022-249-3564</a>
                </Link>
                <span className="icon-text address-content"><svg className="address-icon">
                    <use href="#svg-place" />
                </svg>
                    <div>〒982-0027<br />仙台市太白区大塒町8-1東北大学YMCA渓水寮</div>
                </span>

            </address>
        </footer>
    )
}