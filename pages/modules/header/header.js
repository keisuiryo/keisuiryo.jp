import Link from "next/link"

/*
title, 
*/
export const config = {
  unstable_runtimeJS: true
}
export default function Fab(props) {
  let _title = "渓水寮"
  if (props.title) {
    _title = props.title
  }/*
    let pimg = null
    if(props.imageSrc) {
        pimg = (<img width="400" height="300" className="header-image" src={props.imageSrc} alt={props.imageAlt} />)
    }*/
  return (
    <header className="header-container">
      <Link href="/" className="header-home-link" aria-label="渓水寮トップページへ">
        <svg className="title-logo" width="40" height="32">
            <use href="#ymca-logo" />
          </svg>
        <h1 className="title-box">
          <div className="title-up">東北地区学生YMCA（仮称）渓水寮</div>
          <div className="title">{_title}</div>
        </h1>
      </Link>
    </header>
  )
}
