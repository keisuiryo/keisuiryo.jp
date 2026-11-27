import Head from 'next/head'
import Script from 'next/script'

export default function Meta(props) {
    let _title = ""
    if (!props.title) {
        _title = "東北地区学生YMCA 渓水寮 | 食事付きの学生寮"
    } else {
        _title = props.title + " | 東北地区学生YMCA 渓水寮"
    }
    const _url = props.canonicalUrl || (props.id
        ? `https://keisuiryo.jp/${String(props.id).replace(/^\/+|\/+$/g, '')}/`
        : "https://keisuiryo.jp/");
    const publisher = {
        "@type": "Organization",
        "name": "東北地区学生YMCA",
        "url": "https://keisuiryo.jp/",
        "logo": "https://keisuiryo.jp/ymca-logo.webp",
        "address": {
            "@type": "PostalAddress",
            "postalCode": "982-0027",
            "addressRegion": "宮城県",
            "addressLocality": "仙台市太白区",
            "streetAddress": "大塒町8-1"
        },
        "telephone": "+81-22-249-3564",
        "sameAs": [
            "https://twitter.com/keisuiryo",
            "https://ja-jp.facebook.com/keisuiryo/",
            "https://www.instagram.com/keisuiryo/"
        ]
    }
    const jsonLd = props.id
        ? [
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": _title,
                "description": props.desc,
                "url": _url,
                "publisher": publisher
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "トップ",
                        "item": "https://keisuiryo.jp/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": props.title || _title,
                        "item": _url
                    }
                ]
            }
        ]
        : [
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                ...publisher
            },
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "東北地区学生YMCA 渓水寮",
                "url": _url,
                "publisher": publisher
            }
        ]
    const _jsonld = {
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
    }
    return (
        <>
            <Head>
                <link rel="icon" href="/ymca-logo.webp" />
                {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />*/}
                <title>{_title}</title>
                <meta name="description" content={props.desc} />
                {!props.noindex && <link rel="canonical" href={_url} />}
                {props.noindex && <meta name="robots" content="noindex,follow" />}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@keisuiryo" />
                <meta name="twitter:creator" content="@keisuiryo" />
                <meta property="og:url" content={_url} />
                <meta property="og:title" content={_title} />
                <meta property="og:description" content={props.desc} />
                <meta property="og:image" content="https://keisuiryo.jp/keisuiryo.webp" />
                <meta name="thumbnail" content="https://keisuiryo.jp/main.webp" />
                <meta name="theme-color" content="#9d4215" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={_jsonld}
                    key="product-jsonld"
                />

            </Head>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-VC4C2W5VRY`}
            />
            <Script id="ga"
                strategy="afterInteractive">{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-VC4C2W5VRY');`}
            </Script>
        </>
    )
}
