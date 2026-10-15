import Link from 'next/link'
import Wrapper from './modules/wrapper'

const questionGroups = [
    {
        id: 'living',
        title: '寮での暮らし',
        questions: [
            {
                question: '男女混住が不安です',
                answer: <>
                    <p>渓水寮は男女混住の寮です。安心して生活できるよう、次のようなルール・設備があります。</p>
                    <ul>
                        <li>浴室・脱衣場には鍵があり、使用中の札を掲示して利用します。</li>
                        <li>トイレは男女別です。</li>
                        <li>居室は原則として男子が1階、女子が2階です。</li>
                        <li>各居室にバルコニーがあり、室内干しもできます。</li>
                        <li>男女混住に関する誓約書を定めています。</li>
                    </ul>
                    <p>生活上のルールや現在の状況について、入寮前に確認したい方はお問い合わせください。</p>
                </>
            },
            {
                question: '飲酒の強制はありますか？',
                answer: <p>飲酒の強制はありません。お酒を飲む人も飲まない人も、それぞれの意思が尊重されます。</p>
            },
            {
                question: '上下関係などはありますか？',
                answer: <p>先輩・後輩の上下関係はありません。</p>
            },
            {
                question: '門限はありますか？',
                answer: <p>門限はありません。防犯のため夜間は施錠しますが、寮生には合鍵を配布しています。</p>
            },
            {
                question: 'クリスチャンでなくても入寮できますか？',
                answer: <p>はい。寮生の多くはクリスチャンではありません。</p>
            }
        ]
    },
    {
        id: 'belongings',
        title: '入寮の準備',
        questions: [
            {
                question: '入寮にあたり用意するものはありますか？',
                answer: <>
                    <p>個人で使うものは各自でご用意ください。寮に備え付けているものもあります。</p>
                    <div className="faq-belongings-grid">
                        <div>
                            <h4>各自で用意するもの</h4>
                            <ul>
                                <li>ドライヤー</li>
                                <li>調味料</li>
                                <li>洗剤・ハンガー</li>
                                <li>布団</li>
                                <li>洗面用具</li>
                            </ul>
                        </div>
                        <div>
                            <h4>寮にあるもの</h4>
                            <ul>
                                <li>掃除機</li>
                                <li>机・椅子</li>
                                <li>収納・カーテン</li>
                                <li>食器・箸・コップ</li>
                                <li>調理器具・冷蔵庫</li>
                                <li>プリンター</li>
                                <li>すのこベッド</li>
                            </ul>
                        </div>
                    </div>
                    <p>備品の状況は変わることがあります。入寮前に必要なものを確認したい場合はご相談ください。</p>
                </>
            }
        ]
    }
]

export default function FAQ() {
    return (
        <Wrapper id="faq" title="よくある質問" desc="東北大学YMCA渓水寮での暮らしや入寮準備について、よくある質問をまとめています。">
            <div className="faq-page">
                <p className="faq-lead">寮生活や入寮の準備について、よくいただく質問をまとめました。</p>
                <nav className="faq-index" aria-label="質問のカテゴリ">
                    {questionGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.title}</a>)}
                </nav>

                {questionGroups.map((group) => (
                    <section className="faq-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
                        <h2 className="faq-group-title" id={`${group.id}-title`}>{group.title}</h2>
                        <div className="faq-list">
                            {group.questions.map((item) => (
                                <details className="faq-card" key={item.question}>
                                    <summary>{item.question}</summary>
                                    <div className="faq-answer">{item.answer}</div>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}

                <aside className="faq-contact">
                    <h2>ほかに質問がある方へ</h2>
                    <p>ページにないことや、最新の状況についてはお気軽にお問い合わせください。</p>
                    <Link href="/apply/" className="faq-contact-link">お問い合わせ・募集要項を見る →</Link>
                    <p className="faq-life-link">寮での日々の活動は<Link href="/life/" className="link">寮生活のページ</Link>でも紹介しています。</p>
                </aside>
            </div>
        </Wrapper>
    )
}
