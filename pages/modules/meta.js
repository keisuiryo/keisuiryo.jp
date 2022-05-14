import Head from 'next/head'
import Script from 'next/script'
export const config= {
  unstable_runtimeJS: true
}
export default function Meta(props) {
    let _title = ""
    if (!props.title) {
        _title = "東北大学YMCA渓水寮 | 食事付きの学生寮"
    } else {
        _title = props.title + " | 東北大学YMCA渓水寮"
    }
    let _url = "https://keisuiryo.jp/" + props.id;
    const _top = `
        [
            {
                "@context": "https://schema.org",
                "@type": "Apartment",
                "name": {"東北大学YMCA渓水寮"},
                "url": "https://keisuiryo.jp/",
                "publisher": {
                    "@type": "Organization",
                    "name": "東北大学YMCA渓水寮",
                    "url": "https://keisuiryo.jp/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://keisuiryo.jp/assets/ymca-logo.webp",
                        "width": 420,
                        "height": 340
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "postalCode": "982-0027",
                        "addressRegion": "宮城県",
                        "addressLocality": "仙台市太白区",
                        "streetAddress": "大塒町8-1"
                    }
                },
                "image": {
                    "@type": "ImageObject",
                    "url": "https://keisuiryo.jp/assets/main.webp",
                    "width": 640,
                    "height": 480
                },
                "description": "東北大学YMCA渓水寮は東北大学の学生などが暮らす学生寮です。寮に住み込みの寮母さん手作りの食事、13名のアットホームな寮の雰囲気、安い寮費が魅力の寮です。",
                "telephone": "+81-022-249-3564",
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                },
                "founder": "石原謙",
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 38.236063,
                    "longitude": 140.859312
                },
                "logo": "https://keisuiryo.jp/assets/ymca-logo.webp",
                "sameAs": [
                    "https://twitter.com/keisuiryo",
                    "https://ja-jp.facebook.com/keisuiryo/"
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "渓水寮",
                        "item": "https://keisuiryo.jp/"
                    }
                ]
            }
        ]`
    const _sub = `
        [{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${_title}",
            "url": "${_url}",
            "publisher": {
                "@type": "Organization",
                "name": "東北大学YMCA渓水寮",
                "url": "https://keisuiryo.jp/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://keisuiryo.jp/ymca-logo.webp",
                    "width": 420,
                    "height": 340
                },
                "address": {
                    "@type": "PostalAddress",
                    "postalCode": "982-0027",
                    "addressRegion": "宮城県",
                    "addressLocality": "仙台市太白区",
                    "streetAddress": "大塒町8-1"
                }
            },
            "image": {
                "@type": "ImageObject",
                "url": "https://keisuiryo.jp/main.webp",
                "width": 640,
                "height": 480
            },
            "description": "",
            "logo": "https://keisuiryo.jp/ymca-logo.webp"
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "渓水寮",
                "item": "https://keisuiryo.jp/"
              },{
                  "@type": "ListItem",
                "position": 2,
                "name": "${props.title}",
                "item": "${_url}"
              }
            ]
        }
        ]`
    const _jsonld = { __html: props.id ? _sub : _top }
    return (
        <>
            <Head>
                <link rel="icon" href="ymca-logo.webp" />
                <title>{_title}</title>
                <meta name="description" content={props.desc} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@keisuiryo" />
                <meta name="twitter:creator" content="@keisuiryo" />
                <meta property="og:url" content={_url} />
                <meta property="og:title" content={_title} />
                <meta property="og:description" content={props.desc} />
                <meta property="og:image" content="https://keisuiryo.jp/main.webp" />
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
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
  window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-VC4C2W5VRY');
  `,
                }}
            />
        </>
    )
}