
import Link from 'next/link'
export default function Card(props) {
    let link = null
    if (props.linkHref) {
        link = (
        (<Link href={props.linkHref} className="link summary-more">

            {props.linkTitle}

        </Link>))
    }
    let image = null
    if (props.imageSrc) {
        image = (<img loading="lazy" width="400" height="300" className="image"
            src={props.imageSrc} alt={props.imageAlt} />)
    }

    return (
        <div className="card-box">
            <h2 className="contents-title">{props.title}</h2>
            {props.children}
            {image}
            {link}
        </div>
    )
}