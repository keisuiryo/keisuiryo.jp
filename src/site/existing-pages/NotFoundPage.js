import Meta from '../components/meta'
import SVG from '../components/svg'
import Link from 'next/link'
export const config= {
    unstable_runtimeJS: true
}
export default function Custom404() {
    return (
        <div className='subpage-container'>
            <Meta title="404 | ページが見つかりません" desc="お探しのページは見つかりません" noindex />
            <SVG />
            <div className="view-container">
                <img src="/main.webp" className="bg404" />
                <div className="box404">
                    <h1>ページが見つかりません</h1>
                    <Link href="/" className="nav-link-fab btn">渓水寮概要 →</Link>
                    <p>東北地区学生YMCA 渓水寮</p>
                </div>
            </div>
        </div>
    );
}
