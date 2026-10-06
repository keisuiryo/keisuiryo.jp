import Link from 'next/link'
import Wrapper from './modules/wrapper'
import legacyVoices from '../content/legacy-voices.json'

const archivedVoices = [
    ...legacyVoices.map((voice) => ({
        ...voice,
        excerpt: {
            yamaguchi: '共同生活ならではの意外な出会いと、趣味の共通点から広がる交流について。',
            wakayama: '自治寮での役割や人との関わりを通じて感じた、渓水寮の魅力。',
            shiro: '寮生活の負担や人間関係、YMCAとの関わりを含めて綴る暮らしの実感。'
        }[voice.slug]
    })),
    {
        slug: 'nuts',
        title: '渓水寮に一年半住んだ女子によるレポート',
        author: 'Nuts',
        affiliation: '工学部・2年女子',
        excerpt: '立地の不便さから、寮の仲間・食事・費用まで。1年半の暮らしを振り返ります。'
    },
    {
        slug: 'denzo',
        title: '渓水寮の構成員',
        author: 'DENZO',
        affiliation: '工学部・3年男子',
        excerpt: '寮生・寮母・理事・卒寮生。それぞれの関わりから寮の運営を見つめます。'
    },
    {
        slug: 'supika',
        title: '渓水寮の雰囲気を分析してみる',
        author: 'すぴか',
        affiliation: '工学部・2年男子',
        excerpt: '少人数の寮で保たれる、互いの個を尊重する関係について。'
    }
]

export default function Messages() {
    return (
        <Wrapper title="寮生の声" id="messages" desc="渓水寮での暮らしを、寮生それぞれの視点から綴った文章です。">
            <section className="messages-archive" aria-labelledby="messages-archive-title">
                <h2 id="messages-archive-title" className="contents-title">寮生の声</h2>
                <p className="contents-desc">寮生一人一人の体験や考えを紹介します。寮費・交通などの情報は投稿当時の内容で、現在とは異なる場合があります。</p>
                <div className="messages-archive-grid">
                    {archivedVoices.map((voice) => (
                        <Link href={`/messages/${voice.slug}/`} className="messages-archive-card" key={voice.slug}>
                            <h3>{voice.title}</h3>
                            <p>{voice.author}・{voice.affiliation}</p>
                            <p className="messages-archive-excerpt">{voice.excerpt}</p>
                            <span>記事を読む →</span>
                        </Link>
                    ))}
                </div>
            </section>
        </Wrapper>
    )
}
