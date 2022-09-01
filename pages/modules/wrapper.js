import Footer from './footer/footer-pc'
import Navigation from './navigation/navigation'
import SVG from './svg'
import Meta from './meta'
import Header from './header/header'
import Fab from './fab'

export default function Wrappr(props) {
    let h;
    if(!props.noheader) {
        h = (<Header title={props.title} imageSrc={props.imageSrc} imageAlt={props.imageAlt}/>)
    }
    return (
        <>
        <Meta title={props.title} desc={props.desc} id={props.id}/>
        <div className='subpage-container'>
            <SVG />
            <div className="view-container">
                {h}
                <main className="main-container">
                    {props.children}
                    <Fab />
                </main>
                <div className='pc white'><Footer /></div>
            </div>
            <Navigation id={props.id} />
        </div>
        </>
    )
}