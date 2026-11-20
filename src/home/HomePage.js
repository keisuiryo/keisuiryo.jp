import Link from 'next/link'
import Wrapper from '../site/components/wrapper'

export const config = {
  unstable_runtimeJS: true
}

export default function Home({ wikiCategories = [] }) {
  return (
    <Wrapper noheader desc="東北地区YMCA（仮称）渓水寮は、大学生などが共同生活を送る定員13名の学生寮です。寮の暮らし、施設、寮費、アクセス、2027年4月入寮生の募集についてご案内します。">
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
          <nav className="home-hero-nav" aria-label="メインナビゲーション">
            <a href="#about">渓水寮について</a>
            <a href="#life">寮の一日</a>
            <a href="#conditions">施設・条件</a>
            <a href="#visit">見学・お問い合わせ</a>
            <Link href="/apply/" className="home-hero-nav-apply">募集要項 <span aria-hidden="true">↗</span></Link>
            <Link href="/wiki/">より詳しく</Link>
          </nav>
        </header>
        <h1 className="ks-sr-only">共につくり、共に造られる。渓水寮。</h1>
        <img className="home-hero-handwriting" src="/design/title-handwriting-fourth-v2.png" alt="" />
        <a className="home-hero-scroll" href="#home-content" aria-label="ページ本文へ">
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <div className="top-contents-wrapper ks-home" id="home-content">
        <section className="ks-section ks-about" id="about" aria-labelledby="ks-about-title">
          <div className="ks-section-inner">
            <header className="ks-section-heading">
              <p className="ks-section-index">01 ／ ABOUT</p>
              <h2 className="ks-section-title" id="ks-about-title">渓水寮について</h2>
            </header>
            <div className="ks-about-grid">
              <div className="ks-about-copy">
                <h3 className="ks-subtitle ks-about-slogan">共につくり、<br />共に造られる。</h3>
                <p>渓水寮は、東北大学YMCAのもとで運営されてきた学生寮です。2027年4月からは「東北地区YMCA（仮称）渓水寮」として、新しい運営体制で始まります。</p>
                <p>13人の寮生が、理事の支援を受けながら、自分たちの暮らしを一緒に運営しています。寮生には東北大学の学生が多くいますが、寮は大学とは別の運営です。</p>
                <Link className="ks-text-link" href="/about/">運営体制・寮の概要を読む <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="ks-photo-frame ks-about-frame" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="ks-section ks-life" id="life" aria-labelledby="ks-life-title">
          <div className="ks-section-inner">
            <header className="ks-section-heading ks-section-heading-split">
              <div>
                <p className="ks-section-index">02 ／ DAILY LIFE</p>
                <h2 className="ks-section-title" id="ks-life-title">寮の一日</h2>
              </div>
              <p className="ks-section-lead">一緒に過ごす時間も、自分の時間も。<br />食卓、個室、ホールから寮の日常を紹介します。</p>
            </header>

            <div className="ks-daily-grid">
              <article className="ks-daily-item">
                <div className="ks-photo-frame ks-daily-photo" aria-hidden="true" />
                <div className="ks-daily-copy">
                  <h3 className="ks-subtitle">個室</h3>
                  <p>6畳の個室に、ベッド・机・椅子・エアコンがあります。共同生活の中にも、自分の時間を過ごす場所があります。</p>
                  <Link className="ks-text-link" href="/facilities/">個室・設備について <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
              <article className="ks-daily-item">
                <div className="ks-photo-frame ks-daily-photo" aria-hidden="true" />
                <div className="ks-daily-copy">
                  <h3 className="ks-subtitle">食卓</h3>
                  <p>授業日の朝と晩には、寮母さんの手作りの食事があります。食卓を囲む時間も、寮での暮らしのひとつです。</p>
                  <Link className="ks-text-link" href="/meals/">食事と献立を見る <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
              <article className="ks-daily-item">
                <div className="ks-photo-frame ks-daily-photo" aria-hidden="true" />
                <div className="ks-daily-copy">
                  <h3 className="ks-subtitle">ホール</h3>
                  <p>食事や朝拝、寮生総会などに使う共有の場所です。月に一度の総会では、行事や建物など暮らしのことを話し合います。</p>
                  <Link className="ks-text-link" href="/facilities/">ホール・共用設備について <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            </div>

            <div className="ks-voices-link">
              <div>
                <h3 className="ks-subtitle">寮生の声</h3>
                <p>共同生活で感じていることを、寮生それぞれの言葉で紹介します。</p>
              </div>
              <Link className="ks-text-link" href="/messages/">寮生の声を読む <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="ks-section ks-conditions" id="conditions" aria-labelledby="ks-conditions-title">
          <div className="ks-section-inner">
            <header className="ks-section-heading ks-section-heading-split">
              <div>
                <p className="ks-section-index">03 ／ LIVING</p>
                <h2 className="ks-section-title" id="ks-conditions-title">施設・条件</h2>
              </div>
              <p className="ks-section-lead">住まい、費用、通学。<br />入寮を考えるときに知りたいことをまとめました。</p>
            </header>

            <div className="ks-conditions-grid">
              <article className="ks-condition-item">
                <h3 className="ks-subtitle">施設</h3>
                <div className="ks-photo-frame ks-condition-photo" aria-hidden="true" />
                <p>個室のほか、ホールや台所、客間などの共用設備があります。</p>
                <Link className="ks-text-link" href="/facilities/">設備について <span aria-hidden="true">↗</span></Link>
              </article>
              <article className="ks-condition-item ks-fee-item">
                <h3 className="ks-subtitle">寮費</h3>
                <p className="ks-cost-total">53,000<span>円／月</span></p>
                <dl className="ks-cost-list">
                  <div><dt>理事会費</dt><dd>25,000円</dd></div>
                  <div><dt>経常費</dt><dd>28,000円</dd></div>
                </dl>
                <p className="ks-condition-note">管理・維持費、光熱費、食費などを含みます。YMCAの支援により家賃はかかりません。</p>
                <Link className="ks-text-link" href="/compare/">住まいと生活費を比較する <span aria-hidden="true">↗</span></Link>
              </article>
              <article className="ks-condition-item">
                <h3 className="ks-subtitle">アクセス</h3>
                <div className="ks-photo-frame ks-condition-photo" aria-hidden="true" />
                <p>東北大学まではバス・地下鉄で約20分、原付で約10分です。近くにはコンビニや病院などがあります。</p>
                <Link className="ks-text-link" href="/location/">通学・周辺施設を見る <span aria-hidden="true">↗</span></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="home-visit" id="visit" aria-labelledby="home-visit-title">
          <div className="home-visit-inner">
            <p className="home-visit-eyebrow">COME &amp; SEE</p>
            <h2 id="home-visit-title">まずは、<br />訪ねてみませんか。</h2>
            <p className="home-visit-copy">2027年4月入寮生を募集しています。対象や入寮までの流れは募集要項をご覧ください。</p>
            <div className="home-visit-actions">
              <Link href="/apply/">募集要項 <span aria-hidden="true">↗</span></Link>
              <a href="https://lin.ee/6XMmw9l" target="_blank" rel="noopener noreferrer">見学・お問い合わせ <span aria-hidden="true">↗</span></a>
            </div>
            <p className="home-visit-email">メールでのお問い合わせ：<a href="mailto:ryo@keisuiryo.jp">ryo@keisuiryo.jp</a></p>
          </div>
        </section>

        <section className="ks-section ks-wiki" id="wiki" aria-labelledby="ks-wiki-title">
          <div className="ks-section-inner">
            <header className="ks-section-heading ks-section-heading-split">
              <div>
                <p className="ks-section-index">04 ／ WIKI</p>
                <h2 className="ks-section-title" id="ks-wiki-title">より詳しく</h2>
              </div>
              <p className="ks-section-lead">理念や暮らしの詳しい記事を、<br />テーマごとに読むことができます。</p>
            </header>
            <div className="ks-wiki-grid">
              {wikiCategories.map((category, index) => (
                <article className="ks-wiki-card" key={category.order}>
                  <span className="ks-wiki-number">0{index + 1}</span>
                  <h3 className="ks-subtitle">{category.title}</h3>
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

        <a className="home-back-to-top ks-page-top" href="#home-top">ページトップへ ↑</a>
      </div>
    </Wrapper>
  )
}
