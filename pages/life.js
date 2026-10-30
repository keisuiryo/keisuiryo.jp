import Link from 'next/link'
import Wrapper from './modules/wrapper'

const activities = [
    {
        title: '読書会',
        image: '/events/bookclub.webp',
        alt: '読書会の様子',
        children: <>
            <p>月に一度、担当の寮生が自由にテーマを決め、ワークショップを企画します。活動を通して、仲間の新しい一面に出会う機会にもなっています。</p>
            <p>これまでに、「太宰治『駆け込み訴え』を読む」「落語のススメ」「ウクライナと情報戦」「『大人』とは」などのテーマが取り上げられました。また、「血糖値を上げて黙想する会」「ボードゲームを作る会」など、気軽に楽しめる企画も開催しています。</p>
        </>
    },
    {
        title: '寮生総会',
        image: '/events/meeting.webp',
        alt: '寮生総会の様子',
        children: <p>月に一度開かれる、寮生自治の最も重要な行事です。寮生全員が、生活の決まりや行事、係の活動など共同生活に関わる事柄について、意見を述べ、話し合い、決定に参加する権限を持ちます。その権限を行使し、寮の運営をともに担う責任として、総会への出席は全員の義務です。係の活動を報告し、これからの方針も確認します。</p>
    },
    {
        title: '朝拝',
        image: '/events/chohai.webp',
        alt: '朝拝の様子',
        children: <p>朝食の前に集まり、讃美歌を歌ったあと、朝拝当番が選んだ短い聖書箇所を一緒に読みます。聖書に触れる時間であると同時に、朝に寮生同士が顔を合わせ、近況を交わす大切な交流の場です。日々の交流を通して互いを知ることは、寮生活や自治の話し合いを支えています。当番が近況などを記す「朝拝ノート」も、互いを知るきっかけになっています。</p>
    }
]

export default function Life() {
    return (
        <Wrapper id="life" title="寮生活" desc="渓水寮の共同生活と寮生自治、寮生総会での話し合い、日々の活動や行事、男女混住での暮らし、寮生の声をご紹介します。">
            <div className="life-page">
                <p className="life-lead">寮生が一緒に暮らし、話し合い、共同生活を自分たちでつくっていく学生寮です。</p>

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
                    <h2 className="life-section-title">寮生活と自治—寮生が担う権限と責任</h2>
                    <p>渓水寮では、寮生は共同生活の利用者であるだけでなく、暮らしをつくる担い手です。寮生総会で生活の決まりや行事、係の活動などを話し合い、寮生自身が決定し、実行してきました。寮生には、寮の運営に意見を出し、共同生活に関わる決定に参加する権限があります。</p>
                    <p>自治は、決める権限と責任が一体となったものです。掃除や係の仕事を分担し、決まったルールを守ること、食事や役割に変更があるときに連絡し合うこと、話し合ったことや仕事を次の寮生へ引き継ぐことも、共同生活を支える責任です。</p>
                    <p>建物や団体全体の管理と、寮生が決める生活上の事柄には、それぞれ役割があります。2027年度からの新しい運営体制における権限と役割分担は、決まりに沿って案内します。</p>
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
                    <p>月に一度の寮生総会をはじめ、入寮式・卒寮式・クリスマス会などの定例行事があります。寮生全員で寮の節目をつくる機会として、定例行事への参加が求められます。一方、花見・芋煮・温泉巡りなどは、寮生が自主的に企画する自由参加の行事として活発に行われています。</p>
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
                    <p>寮での暮らしや人間関係に加え、寮生総会などで寮の運営や自治について話し合った経験も、寮生の文章からご紹介します。一人ひとりの言葉を通して、渓水寮での共同生活と自治の様子をご覧ください。</p>
                    <Link href="/messages/" className="life-voices-link">寮生の声を読む <span aria-hidden="true">→</span></Link>
                </section>
            </div>
        </Wrapper>
    )
}
