import Link from 'next/link'
import Wrapper from '../pages/modules/wrapper'

export default function ArchiveMessage({ voice }) {
    return (
        <Wrapper title={`寮生の声 ${voice.author}`} id="messages" desc={`${voice.author}による「${voice.title}」です。`}>
            <article className="message-archive-article">
                <Link href="/messages/" className="link">← 寮生の声一覧へ</Link>
                <h2 className="contents-title">{voice.title}</h2>
                <p className="message-archive-author">{voice.author}・{voice.affiliation}</p>
                <p className="message-archive-note">以下は寮生による投稿当時の文章です。人数や生活状況など、現在と異なる内容を含む場合があります。</p>
                <p>{voice.text}</p>
            </article>
        </Wrapper>
    )
}
