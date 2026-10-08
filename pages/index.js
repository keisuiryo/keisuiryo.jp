import Head from 'next/head'
import AnnounceModal from './modules/announce-modal'

const notices = [
    {
        id: 'newsletter-christmas-2026',
        category: '会報62号・行事のご案内',
        title: '会報原稿・クリスマス会2026のご案内',
        date: '会報原稿締切：2026年11月8日（日）',
        content: <>
            <h4>解散の集いへのご出席ありがとうございました</h4>
            <p>東北大学基督教青年会「解散の集い」は、9月25日に感謝のうちに終えることができました。ご参加くださった皆さま、ありがとうございました。会場41名（寮生10名）、オンライン6名の方にご参加いただきました。詳細は会報62号に掲載します。当日スピーチをいただいた方には、会報掲載にあたりお問い合わせする場合があります。</p>

            <h4>会報原稿を募集しています</h4>
            <p>原稿は編集子である理事長宛にメールでお送りください。</p>
            <p>解散の集いに参加した感想や、寮を出てからの歩みなど、内容は自由です。仲間内で編集していただく形も歓迎します。集まりの写真を添える場合は、掲載されている方のお名前もお知らせください。</p>
            <p><strong>締切：11月8日（日）</strong><br />理事長・畠山祥正：<a href="mailto:hatakey@nifty.com">hatakey@nifty.com</a></p>
            <a className="board-action" href="mailto:hatakey@nifty.com?subject=%E4%BC%9A%E5%A0%B1%E5%8E%9F%E7%A8%BF">原稿を送る</a>

            <h4>クリスマス会のご案内</h4>
            <dl className="board-notice-details">
                <div><dt>日時</dt><dd>2026年12月12日（土）16時30分～</dd></div>
                <div><dt>会場</dt><dd>渓水寮</dd></div>
                <div><dt>講師</dt><dd>齋藤 篤 先生（日本キリスト教団仙台宮城野教会牧師）</dd></div>
                <div><dt>会費</dt><dd>お一人 1,000円程度（当日お支払い）</dd></div>
                <div><dt>回答期限</dt><dd>検討中</dd></div>
            </dl>
            <p>※会員以外からの直接申込はできません。</p>
            <p>連絡先：<a href="mailto:keisuiryo@gmail.com">keisuiryo@gmail.com</a></p>
            <button className="board-action" type="button" disabled aria-disabled="true">詳細はこちら</button>
        </>
    },
    {
        id: 'after-2027',
        category: '今後の活動',
        title: '2027年4月以降について',
        date: '理事会からのお知らせ',
        content: <p>東北大学基督教青年会寮史編集委員会を立ち上げ、毎年度成果を発表しながら『青年会寮史』の刊行を目指します。同窓会の機能は、当面引き継ぐ予定です。</p>
    }
]

export default function BoardNotices() {
    return (
        <>
            <Head>
                <title>理事会からのお知らせ | 東北大学基督教青年会</title>
                <meta name="description" content="東北大学基督教青年会理事会からのお知らせ。会報、行事、今後の活動についてご案内します。" />
            </Head>
            <div className="board-site">
                <main>
                    <AnnounceModal />
                    <section className="board-hero">
                        <div className="board-hero-content">
                            <img src="/ymca-logo.webp" alt="" />
                            <p className="board-eyebrow">東北大学基督教青年会</p>
                            <h1>理事会からのお知らせ</h1>
                            <p>会報や行事、今後の活動についてご案内します。</p>
                        </div>
                    </section>

                    <section className="board-context" aria-label="運営について">
                        <span className="board-context-mark" aria-hidden="true">i</span>
                        <p>渓水寮の管理運営は、2027年3月末をもって終了する予定です。今後の活動に関するご案内を本ページに掲載します。</p>
                    </section>

                    <section className="board-notices" id="board-notices" aria-labelledby="board-notices-title">
                        <div className="board-section-heading">
                            <p className="board-eyebrow">UPDATES</p>
                            <h2 id="board-notices-title">お知らせ一覧</h2>
                        </div>
                        <div className="board-notice-list">
                            {notices.map((notice) => (
                                <article className="board-notice" id={notice.id} key={notice.id}>
                                    <div className="board-notice-heading">
                                        <span className="board-category">{notice.category}</span>
                                        <p className="board-notice-date">{notice.date}</p>
                                    </div>
                                    <h3>{notice.title}</h3>
                                    <div className="board-notice-content">{notice.content}</div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="board-footer">
                    <img src="/ymca-logo.webp" alt="" />
                    <div>
                        <p>東北大学基督教青年会 理事会</p>
                        <a href="mailto:hatakey@nifty.com">理事長への連絡（hatakey@nifty.com）</a>
                    </div>
                    <small>© 東北大学基督教青年会</small>
                </footer>
            </div>
        </>
    )
}
