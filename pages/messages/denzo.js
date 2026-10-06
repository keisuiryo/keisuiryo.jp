import Link from 'next/link'
import Wrapper from '../modules/wrapper'

export default function DenzoMessage() {
    return (
        <Wrapper title="寮生の声 DENZO" id="messages" desc="寮生による、渓水寮の構成員についての文章です。">
            <article className="message-archive-article">
                <Link href="/messages/" className="link">← 寮生の声一覧へ</Link>
                <h2 className="contents-title">渓水寮の構成員</h2>
                <p className="message-archive-author">DENZO・工学部・3年男子</p>
                <p className="message-archive-note">以下は寮生による投稿当時の文章です。運営体制や生活状況などは、現在と異なる場合があります。</p>

                <p>渓水寮は、寮生と寮母さん、理事の先生方、そしてOBによって運営されています。寮生は東北大学生に限らず、仙台の大学生を広く受け付けており、寮生に多様性を持たせるシステムになっていると感じています。</p>

                <p>寮母さんは朝夕の寮食を作ってくださる人です。金曜日の夜はカレーと決まっており、多くの寮生が楽しみにしています。</p>

                <p>理事の先生方は、寮生による自治・運営の後見役であり、建物の改修等、寮生だけでは不安のある仕事の補助をしていただくこともあります。寮生だけの自治では不安を感じる自分にとってはありがたく感じています。</p>

                <p>OBの皆様は、寮に寄付をしてくださることがあり、本当に助かっています。</p>

                <p>このように渓水寮は大人の補助を受けつつ運営している自治寮ですから、「不安もあるけど共同生活に興味がある」という学生さんも、ぜひ寮にご一報下さい〜。</p>
            </article>
        </Wrapper>
    )
}
