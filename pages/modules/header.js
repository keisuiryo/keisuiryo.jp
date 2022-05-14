import Link from "next/link"

/*
title, 
*/
export const config= {
  unstable_runtimeJS: true
}
export default function Fab(props) {
    let _subtitle="東北大学YMCA"
    let _title="渓水寮"
    if(props.title) {
       _subtitle += "渓水寮"
       _title = props.title 
    }
    let pimg = null
    if(props.imageSrc) {
        pimg = (<img width="400" height="300" className="header-image" src={props.imageSrc} alt={props.imageAlt} />)
    }
    return (
        <header className="header-container">
          <div className="header-box">
            <div className="header-inner">
              <h1 className="title-box">
                <div className="title-up icon-text"> <svg className="title-logo" width="40" height="32">
                  <use href="#ymca-logo" />
                </svg>{_subtitle}</div>
                <div className="title">{_title}</div>
              </h1>
            </div>
          </div>
          {pimg}
          <Link href="/apply/"><a className="btn-fab btn mobile">募集要項 →</a></Link>
        </header>
    )
}