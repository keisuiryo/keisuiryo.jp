import Link from 'next/link'
import Wrapper from '../site/components/wrapper'

export const config = {
  unstable_runtimeJS: true
}

export default function Home({ wikiCategories = [] }) {
  return (
    <Wrapper noheader desc="東北地区YMCA（仮称）渓水寮は、大学生などが共同生活を送る定員13名の学生寮です。食事や個室、月額53,000円の費用、2027年4月入寮生の募集についてご案内します。">
      <section className="home-hero" id="home-top" aria-label="渓水寮">
        <img className="top-bg-mobile" src="/design/keisui-watercolor.jpg" alt="木々に囲まれた渓水寮を描いた水彩画" fetchPriority="high" />
        <img className="top-bg-pc" src="/design/keisui-watercolor.jpg" alt="" fetchPriority="high" />
        <header className="home-hero-header">
          <Link href="/" className="home-hero-brand" aria-label="渓水寮トップページ">
            <img className="home-hero-logo" src="/ymca-logo.svg" alt="" />
            <span className="home-hero-brand-text">
              <span className="home-hero-org">
                <span>東北地区学生YMCA</span>
                <span className="home-hero-dorm">渓水寮</span>
              </span>
            </span>
          </Link>
          <nav className="home-hero-nav" aria-label="トップページ内の案内">
            <a href="#about">渓水寮について</a>
            <a href="#people">暮らす人たち</a>
            <a href="#life">寮の一日</a>
            <a href="#information">施設・寮費</a>
            <Link href="/wiki/">渓水寮Wiki</Link>
            <a href="#visit">見学・お問い合わせ</a>
            <Link href="/apply/" className="home-hero-nav-apply">募集要項 <span aria-hidden="true">↗</span></Link>
          </nav>
        </header>
        <h1 className="ks-sr-only">共につくり、共に造られる。渓水寮。</h1>
        <img className="home-hero-handwriting" src="/design/title-handwriting-fourth-v2.png" alt="" />
        <a className="home-hero-scroll" href="#home-content" aria-label="ページ本文へ">
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <div className="top-contents-wrapper ks-home" id="home-content">
        <section className="ks-recruitment" aria-labelledby="ks-recruitment-title">
          <div className="ks-recruitment-inner">
            <div>
              <p className="ks-kicker">2027 RECRUITMENT</p>
              <h2 id="ks-recruitment-title">2027年4月入寮生を募集します</h2>
              <p>対象は、寮での共同生活を共に送れる大学生・大学院生・研究生・通信制の学校に在籍する学生などです。東北大学の学生に限った募集ではありません。</p>
            </div>
            <Link className="ks-action" href="/apply/">募集要項を見る <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="ks-section ks-about" id="about" aria-labelledby="ks-about-title">
          <div className="ks-section-inner ks-split ks-about-grid">
            <div>
              <p className="ks-kicker">01 ／ 渓水寮について</p>
              <h2 id="ks-about-title">東北地区YMCA（仮称）<br />渓水寮</h2>
            </div>
            <div className="ks-copy">
              <p>渓水寮は、東北大学YMCAのもとで運営されてきた学生寮です。東北大学YMCAは2026年度をもって解散し、2027年4月からは新しい運営体制で始まります。</p>
              <p>13人の寮生が、それぞれの生活を大切にしながら共同生活を送っています。理事の支援を受け、寮生が自分たちの暮らしを運営する自治寮です。</p>
              <Link className="ks-text-link" href="/about/">運営体制・寮の概要を読む <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="ks-section ks-people" id="people" aria-labelledby="ks-people-title">
          <div className="ks-section-inner">
            <p className="ks-kicker">02 ／ 暮らす人たち</p>
            <div className="ks-section-heading">
              <h2 id="ks-people-title">暮らす人たち</h2>
              <p>共同生活や日々の活動を、<br />寮生それぞれの言葉で紹介します。</p>
            </div>
            <figure className="ks-feature-photo ks-people-photo">
              <img src="/events/main.webp" alt="花見で集まる寮生" loading="lazy" />
              <figcaption>行事で一緒に過ごすひととき。</figcaption>
            </figure>
            <div className="ks-photo-links">
              <Link className="ks-text-link" href="/messages/">寮生の声を読む <span aria-hidden="true">↗</span></Link>
              <Link className="ks-text-link" href="/life/">寮生活について <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="ks-section ks-life" id="life" aria-labelledby="ks-life-title">
          <div className="ks-section-inner">
            <p className="ks-kicker">03 ／ 寮の一日</p>
            <div className="ks-section-heading ks-life-heading">
              <h2 id="ks-life-title">集う時間と、<br />それぞれの時間。</h2>
              <p>食卓やホールで誰かと過ごす時間。<br />自分の部屋で過ごす時間。<br />四つの場面から、寮の日常を紹介します。</p>
            </div>

            <article className="ks-life-story ks-life-meal">
              <figure className="ks-feature-photo">
                <img src="/meals/meal_pic.webp" alt="食堂で一緒に食事をする寮生" loading="lazy" />
                <figcaption>食卓を囲む、いつもの時間。</figcaption>
              </figure>
              <div className="ks-life-story-copy">
                <p className="ks-kicker">TABLE ／ 食卓</p>
                <h3>食卓に集まる。</h3>
                <p>授業日の朝と晩には、寮母さんの手作りの食事があります。食卓を囲む時間も、寮での暮らしのひとつです。</p>
                <Link className="ks-text-link" href="/meals/">食事と献立を見る <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <article className="ks-life-story ks-life-room">
              <figure className="ks-feature-photo">
                <img src="/facilities/room.webp" alt="渓水寮にある寮生の個室" loading="lazy" />
                <figcaption>一人ひとりに個室があります。</figcaption>
              </figure>
              <div className="ks-life-story-copy">
                <p className="ks-kicker">MY ROOM ／ 自分の部屋</p>
                <h3>自分の時間を過ごす。</h3>
                <p>6畳の個室には、ベッド・机・椅子・エアコンがあります。共同生活の中にも、自分の時間を過ごす場所があります。</p>
                <Link className="ks-text-link" href="/facilities/">個室・設備について <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <article className="ks-life-story ks-life-hall">
              <figure className="ks-feature-photo">
                <img src="/facilities/hall.webp" alt="食事や行事などに使う渓水寮のホール" loading="lazy" />
                <figcaption>食事や行事で使うホール。</figcaption>
              </figure>
              <div className="ks-life-story-copy">
                <p className="ks-kicker">COMMON SPACE ／ ホール</p>
                <h3>みんなの場所に集まる。</h3>
                <p>ホールは食事や朝拝、寮生総会などに使います。テレビやゲーム機、ピアノ、ドラム、本などもある共有の場所です。</p>
                <Link className="ks-text-link" href="/facilities/">ホール・共用設備について <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <article className="ks-life-story ks-life-meeting">
              <figure className="ks-feature-photo">
                <img src="/events/meeting.webp" alt="寮生総会で話し合う寮生" loading="lazy" />
                <figcaption>月に一度の寮生総会。</figcaption>
              </figure>
              <div className="ks-life-story-copy">
                <p className="ks-kicker">MEETING ／ 話し合い</p>
                <h3>暮らしのことを話し合う。</h3>
                <p>月に一度の寮生総会では、行事の企画や建物、寮費など、寮生活に関わることを話し合います。寮生の意見を運営に反映する場です。</p>
                <Link className="ks-text-link" href="/life/#gov">寮生活と自治について <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section className="ks-section ks-information" id="information" aria-labelledby="ks-information-title">
          <div className="ks-section-inner">
            <p className="ks-kicker">04 ／ 施設・寮費・通学</p>
            <div className="ks-section-heading ks-info-heading">
              <h2 id="ks-information-title">暮らしの条件を、<br />ひとつずつ。</h2>
              <p>住まい、費用、通学。<br />入寮を考えるときに知りたいことをまとめました。</p>
            </div>

            <article className="ks-info-row ks-facilities-row">
              <figure className="ks-feature-photo ks-room-photo">
                <img src="/facilities/room.webp" alt="渓水寮の個室" loading="lazy" />
                <figcaption>一人ひとりに個室があります。</figcaption>
              </figure>
              <div className="ks-info-copy">
                <p className="ks-kicker">FACILITIES</p>
                <h3>自分の部屋、<br />みんなの場所。</h3>
                <p>寮生それぞれに個室があり、ホールや客間などの共用施設もあります。トイレと浴室は改修されています。</p>
                <Link className="ks-text-link" href="/facilities/">施設について <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <div className="ks-info-bottom">
              <section className="ks-cost" aria-labelledby="ks-cost-title">
                <p className="ks-kicker">MONTHLY FEES</p>
                <h3 id="ks-cost-title">寮費</h3>
                <p className="ks-cost-total">53,000<span>円／月</span></p>
                <dl className="ks-cost-list">
                  <div><dt>理事会費</dt><dd>25,000円</dd></div>
                  <div><dt>経常費</dt><dd>28,000円</dd></div>
                </dl>
                <p className="ks-cost-note">管理・維持費、光熱費、食費などを含みます。YMCAの支援により家賃はかかりません。</p>
                <Link className="ks-text-link" href="/compare/">住まいと生活費を比較する <span aria-hidden="true">↗</span></Link>
              </section>
              <section className="ks-access" aria-labelledby="ks-access-title">
                <figure className="ks-feature-photo ks-map-photo">
                  <img src="/map.webp" alt="渓水寮、東北大学、仙台市内の位置関係を示す地図" loading="lazy" />
                </figure>
                <div>
                  <p className="ks-kicker">LOCATION</p>
                  <h3 id="ks-access-title">大学や街へのアクセス</h3>
                  <p>東北大学まではバス・地下鉄で約20分、原付で約10分です。寮の近くにはドラッグストア、コンビニ、病院などがあります。</p>
                  <Link className="ks-text-link" href="/location/">通学・周辺施設を見る <span aria-hidden="true">↗</span></Link>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="ks-section ks-ymca" aria-labelledby="ks-ymca-title">
          <div className="ks-section-inner ks-split">
            <div>
              <p className="ks-kicker">05 ／ YMCA</p>
              <h2 id="ks-ymca-title">渓水寮とYMCA。</h2>
            </div>
            <div className="ks-copy">
              <p>渓水寮の寮生には東北大学の学生が多くいますが、寮は東北大学とは別の運営です。東北大学が運営する住まいについては、大学公式サイトをご覧ください。</p>
              <div className="ks-university-links">
                <a className="ks-text-link" href="https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0501/" target="_blank" rel="noopener noreferrer">ユニバーシティ・ハウス <span aria-hidden="true">↗</span></a>
                <a className="ks-text-link" href="https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0502/" target="_blank" rel="noopener noreferrer">学寮 <span aria-hidden="true">↗</span></a>
              </div>
              <Link className="ks-text-link" href="/about/">渓水寮の運営体制・沿革 <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="ks-section ks-wiki" aria-labelledby="ks-wiki-title">
          <div className="ks-section-inner">
            <p className="ks-kicker">06 ／ 渓水寮Wiki</p>
            <div className="ks-section-heading">
              <h2 id="ks-wiki-title">もっと知りたい方へ。</h2>
              <p>理念や暮らしの詳しい記事を、<br />テーマごとに読むことができます。</p>
            </div>
            <div className="ks-wiki-grid">
              {wikiCategories.map((category, index) => (
                <article className="ks-wiki-card" key={category.order}>
                  <span className="ks-wiki-number">0{index + 1}</span>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.articles.map(article => (
                      <li key={article.id}><Link href={article.route}>{article.title} <span aria-hidden="true">↗</span></Link></li>
                    ))}
                  </ul>
                  <Link className="ks-wiki-more" href={`/wiki/#wiki-category-${category.order}`}>この分類の記事を見る <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
            <Link className="ks-text-link ks-all-wiki" href="/wiki/">渓水寮Wikiの目次へ <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="ks-section ks-news" aria-labelledby="ks-news-title">
          <div className="ks-section-inner">
            <p className="ks-kicker">07 ／ お知らせ</p>
            <div className="ks-section-heading">
              <h2 id="ks-news-title">寮からのお知らせ</h2>
              <p>東北大学基督教青年会からの<br />お知らせを掲載しています。</p>
            </div>
            <details className="ks-news-details">
              <summary>2026年度のお知らせを読む <span aria-hidden="true">＋</span></summary>
              <div className="ks-news-content">
                <article>
                  <p className="ks-news-date">2026年9月25日</p>
                  <h3>解散の集いへのご出席ありがとうございました</h3>
                  <p>東北大学基督教青年会「解散の集い」は、9月25日に終えることができました。会場41名（寮生10名）、オンライン6名の方にご参加いただきました。詳細は会報62号に掲載予定です。</p>
                </article>
                <article>
                  <p className="ks-news-date">2026年12月12日</p>
                  <h3>クリスマス会のお知らせ</h3>
                  <p>12月12日（土）16時30分から渓水寮で開催予定です。講師は齋藤篤先生（日本キリスト教団仙台宮城野教会牧師）、会費はお一人1,000円程度（当日払い）です。参加フォームの回答期限は11月12日で、受付は終了しています。会員以外からの直接申込はできません。</p>
                </article>
                <article>
                  <p className="ks-news-date">会報62号</p>
                  <h3>会報原稿の募集</h3>
                  <p>解散の集いに参加した感想や、寮を出てからの歩みなど、内容自由で原稿を募集していました。締切は11月8日で、受付は終了しています。編集子（理事長）宛の送付先は <a href="mailto:hatakey@nifty.com">hatakey@nifty.com</a> です。</p>
                </article>
                <p className="ks-news-contact">2027年4月以降、同窓会機能は当面引き継がれ、『青年会寮史』の刊行を目指す予定です。<br />クリスマス会に関する連絡先：<a href="mailto:keisuiryo@gmail.com">keisuiryo@gmail.com</a></p>
              </div>
            </details>
          </div>
        </section>

        <section className="home-visit" id="visit" aria-labelledby="home-visit-title">
          <div className="home-visit-inner">
            <p className="home-visit-eyebrow">COME &amp; SEE</p>
            <h2 id="home-visit-title">まずは、<br />訪ねてみませんか。</h2>
            <p className="home-visit-copy">見学や入寮について、気になることをお気軽にご相談ください。</p>
            <div className="home-visit-actions">
              <Link href="/apply/">募集要項 <span aria-hidden="true">↗</span></Link>
              <a href="https://lin.ee/6XMmw9l" target="_blank" rel="noopener noreferrer">見学・お問い合わせ <span aria-hidden="true">↗</span></a>
            </div>
            <p className="home-visit-email">メールでのお問い合わせ：<a href="mailto:ryo@keisuiryo.jp">ryo@keisuiryo.jp</a></p>
          </div>
        </section>
        <a className="home-back-to-top" href="#home-top">ページトップへ ↑</a>
      </div>
    </Wrapper>
  )
}
