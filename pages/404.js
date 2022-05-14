import Meta from './modules/meta'
import SVG from './modules/svg'
import Link from 'next/link'
export const config= {
    unstable_runtimeJS: true
}
export default function Custom404() {
    return (<div className='subpage-container'>
        <Meta title="404 | ページが見つかりません" desc="お探しのページは見つかりません" />
        <SVG />
        <div className="view-container">
            <img src="/main.webp" className="bg404" />
            <div className="box404">
                <h1>ページが見つかりません</h1>
                <Link href="/"><a className="nav-link-fab btn">渓水寮概要 →</a></Link>
                <p>東北大学YMCA渓水寮</p>
            </div>
        </div>
    </div>)
}