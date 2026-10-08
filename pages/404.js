import Head from 'next/head'

export default function Custom404() {
    return (
        <div className="board-site board-not-found">
            <Head>
                <title>ページが見つかりません | 理事会からのお知らせ</title>
            </Head>
            <main>
                <p className="board-eyebrow">BOARD NEWS</p>
                <h1>ページが見つかりません</h1>
                <p>お探しのページは公開されていないか、URLが変更された可能性があります。</p>
                <a className="board-action" href="/">理事会からのお知らせへ戻る</a>
            </main>
        </div>
    );
}
