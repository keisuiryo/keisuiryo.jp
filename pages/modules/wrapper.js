import Footer from './footer'
import Navigation from './navigation'
import SVG from './svg'
import Meta from './meta'
import Header from './header'
import Fab from './fab'
export const config= {
  unstable_runtimeJS: true
}
export default function Wrappr(props) {
    return (
        <div className='subpage-container'>
            <Meta title={props.title} desc={props.desc} id={props.id}/>
            <SVG />
            <div className="view-container">
                <Header title={props.title} imageSrc={props.imageSrc} imageAlt={props.imageAlt}/>
                <main className="main-container">
                    {props.children}
                    <Fab />
                </main>
                <Footer />
            </div>
            <Navigation id={props.id} />
        </div>
    )
}