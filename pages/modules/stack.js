import Link from 'next/link'
export const config= {
  unstable_runtimeJS: true
}
export default function Card(props) {
    let link = null
    if (props.linkHref) {
        link = (
        <Link href={props.linkHref}>
            <a className="link summary-more" >
                {props.linkTitle}
            </a>
        </Link>)
    }
    let image = null
    if (props.imageSrc) {
        image = (<img loading="lazy" width="400" height="300" className="image"
            src={props.imageSrc} alt={props.imageAlt} />)
    }

    return (
        <div className="stack-box">
            <img loading="lazy" width="400" height="300" className="image stack-image" src={props.imageSrc}
                alt={props.imageAlt}/>
                <p className="contents-title-small">{props.title}</p>
                {props.children}
        </div>
    )
}