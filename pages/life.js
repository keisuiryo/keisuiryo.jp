import Link from 'next/link'
import Wrapper from './modules/wrapper'

const activities = [
    {
        title: '読書会',
        image: '/events/bookclub.webp',
        alt: '読書会の様子',
        children: <>
            <p>月に一度、担当の寮生が自由にテーマを決め、ワークショップを企画します。活動を通して、仲間の新しい一面に出会う機会にもなっています。</p>
            <p>これまでに、「太宰治『駆け込み訴え』を読む」「落語のススメ」「ウクライナと情報戦」「『大人』とは」などのテーマが取り上げられました。</p>
        </>
    },
    {
        title: '寮生総会',
        image: '/events/meeting.webp',
        alt: '寮生総会の様子',
        children: <p>月に一度、行事の企画や建物のこと、寮費など、寮生活に関わる事柄を話し合います。寮生の意見を寮の運営に反映する場です。</p>
    },
    {
        title: '朝拝',
        image: '/events/chohai.webp',
        alt: '朝拝の様子',
        children: <p>朝食の前に集まり、讃美歌を歌い、聖書を輪読します。当番が近況などを記す「朝拝ノート」も、寮生同士が互いを知る機会になっています。</p>
    }
]

export default function Life() {
    return (
        <Wrapper id="life" title="寮生活" desc="渓水寮の自治、日々の活動や行事、男女混住での暮らし、寮生の声をご紹介します。">
            <div className="life-page">
                <p className="life-lead">13通りの生活が交差する場所。寮生が一緒に暮らし、話し合い、日々の生活をつくっています。</p>

                <nav className="life-index" aria-label="寮生活の目次">
                    <h2 className="contents-title">目次</h2>
                    <ol>
                        <li><a href="#gov">寮生活と自治</a></li>
                        <li><a href="#events">寮の行事</a></li>
                        <li><a href="#gender">男女混住について</a></li>
                        <li><a href="#voices">寮生の声</a></li>
                    </ol>
                </nav>

                <section className="life-section" id="gov">
                    <h2 className="life-section-title">寮生活と自治</h2>
                    <p>居心地の良い寮にするため、掃除当番や係活動など、寮生が分担する仕事があります。日々の暮らしについても、寮生同士で相談しながら運営しています。</p>
                    <img className="life-feature-image" src="/life-bg1.webp" alt="渓水寮での共同生活の様子" />

                    <h3 className="life-subsection-title">活動紹介</h3>
                    <div className="life-activity-grid">
                        {activities.map((activity) => (
                            <article className="life-activity" key={activity.title}>
                                <img src={activity.image} alt={activity.alt} loading="lazy" />
                                <div>
                                    <h4>{activity.title}</h4>
                                    {activity.children}
                                </div>
                            </article>
                        ))}
                    </div>
                    <p>ほかにも、聖書研究や花見、芋煮などの活動があります。</p>
                </section>

                <section className="life-section" id="events">
                    <h2 className="life-section-title">寮の行事</h2>
                    <p>入寮式や卒寮式、献堂記念式、花見、芋煮会、クリスマス会など、季節に応じた行事を行ってきました。行事の内容は年度によって異なります。</p>
                    <p>行事ごとの紹介は、<Link href="/events/" className="link">行事ページ</Link>をご覧ください。</p>
                </section>

                <section className="life-section" id="gender">
                    <h2 className="life-section-title">男女混住について</h2>
                    <p>渓水寮は男女混住の寮です。共同生活のための設備やルールについて、これまで次のように案内してきました。</p>
                    <ul>
                        <li>浴室・脱衣場には鍵があり、名札と使用中の札をかけて使用します。</li>
                        <li>トイレは男女別です。</li>
                        <li>居室は、原則として男性が1階、女性が2階です。</li>
                        <li>各部屋にバルコニーがあり、室内干しもできます。</li>
                        <li>男女混住に関する誓約書が定められています。</li>
                    </ul>
                    <p>設備や運用の説明は、現在の状況に合わせて確認・更新していきます。入寮に関する質問は、<Link href="/faq/" className="link">よくある質問</Link>もご覧ください。</p>
                </section>

                <section className="life-section" id="voices">
                    <h2 className="life-section-title">寮生の声</h2>
                    <p>寮生活について考えることは、寮生一人一人で違います。寮生の文章から、渓水寮での暮らしの一端をご紹介します。</p>
                    <Link href="/messages/" className="life-voices-link">寮生の声を読む <span aria-hidden="true">→</span></Link>
                </section>
            </div>
        </Wrapper>
    )
}
