import Card from './modules/card'
import Wrapper from './modules/wrapper'
import Link from 'next/link'

export const config = {
  unstable_runtimeJS: true
}
export default function Home() {
  return (
    <Wrapper noheader>
      <div className='top-bg-pc'>
        <img className="top-right" src="/top-right.jpg"></img>
        <img className="top-left" src="/top-left.jpg"></img>
        <img className="top-center" src="/top-center.jpg"></img>
      </div>
      <img className="top-bg-mobile" src="/top-mobile-top.webp"></img>
      <div className="top-idt-box">
        <img className="top-idt-img" src="/ymca-logo.webp"></img>
        <h1 className="top-idt"><span className="top-idt-sub">東北大学YMCA</span>渓水寮</h1>
      </div>
      <img className="top-bg-mobile top-bg-mobile-bottom" src="/top-mobile-bottom.webp"></img>
      <div className="desc-box" >
        <h2 className='desc-title'>東北大学YMCA渓水寮は、</h2>
        <p className='desc-text'>一言で表すと、食事つきの学生寮です。朝晩寮母さんが食事を作ってくださります。寮費は月4万7千円です。食費や光熱費などすべて含まれています。定員は13名と寮母さん。少人数な学生寮です。今年度は東北大学など仙台の大学に通う男女新入生を2人、募集しています。</p>
      </div>
      {/*<div className="important">

        <h3><span>i</span>入寮募集日程について<br />(2/27更新)</h3>
        <p>前期試験を受験された方の入寮受付の締切は3/6(日),入寮可否の通知は3/9(水)となっております。入寮をご検討の方は早めにご連絡ください。後期入試の方の募集など、詳しくは<Link href="/apply/"><a className="link"
        >募集要項</a></Link>をご覧ください。
        </p>

      </div>*/}

      <div className='top-contents-wrapper'>
      <div className='round-box index-round-box index-r-about'>
          <div className='index-inround-box'>
            <h3 className='index-inround-title'>渓水寮とは</h3>
            <p className='index-inround-contents'>渓水寮は、東北大学YMCA(キリスト教青年会)の寮です。1928年に建立され、建物は変われど90年以上の歴史を持ちます。現在は東北大学などの教員有志や、卒寮生のご厚意の下運営されています。</p>
            <Link href='/about/'><a className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>理事長あいさつ・寮の概要</a></Link>
          </div>
          <img loading="lazy" className="inround-small-img index-about-img" src="/illust1.webp" />
        </div>
        <h3 className='index-header index-header-1'>渓水寮での生活</h3>
        <div className='cr-box index-cr-1'>
          <div className='cr-flex cr-flex-1'>
          <div>
            <h3 className='index-light-title'>少人数</h3>
            <p className='cr-desc'>渓水寮には１３人の個性豊かな寮生が住んでいます。少人数で、アットホームな雰囲気です。一人一人の生活を大切にしながら、共同生活を送っています。</p>
          </div>
          <img loading="lazy" className="inround-small-img" src="/life-bg1.webp" />
          </div>
          <div className='cr-flex'>
          <div>
            <h3 className='index-light-title'>自治寮</h3>
            <p className='cr-desc'>渓水寮は寮生の手で運営されていますので、寮生が寮の運営に関して(ほとんど)すべてのことを決められます。少人数ですので、気兼ねなく意見を言ったり議論したりできます。</p>
          </div>
          <img loading="lazy" className="inround-small-img" src="/life-bg2.webp" />
          </div>
          <div></div>
        </div>
        <h3 className='index-header'>渓水寮の特長</h3>
        <div className='round-box index-round-box index-r-1'>
          <img loading="lazy" className="index-inround-img" src="/meals.webp" />
          <div className='index-inround-box'>
            <h4 className='index-inround-upper'>Meals</h4>
            <h3 className='index-inround-title'>食事</h3>
            <p className='index-inround-contents'>東北大学YMCA渓水寮では、元食堂経営者の寮母さんが授業日の朝晩に食事を作ってくださります。おいしく、栄養バランスも考えられている食事です。量の調節やアレルギーにも対応できます。</p>
            <Link href='/meals/'><a className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>食事について</a></Link>
          </div>
        </div>
        <div className='round-box index-round-box'>
          <img loading="lazy" className="index-inround-img" src="/facilities.webp" />
          <div className='index-inround-box'>
            <h4 className='index-inround-upper'>Facilities</h4>
            <h3 className='index-inround-title'>設備</h3>
            <p className='index-inround-contents'>東北大学YMCA渓水寮では一人一人に個室があります。ほかにも、ホールや客間などの共用施設も充実しています。トイレとお風呂場は最近新しくなりました。</p>
            <Link href='/facilities/'><a className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>施設について</a></Link>
          </div>
        </div>
        <div className='round-box index-round-box'>
          <img loading="lazy" className="index-inround-img" src="/location.webp" />
          <div className='index-inround-box'>
            <h4 className='index-inround-upper'>Locations</h4>
            <h3 className='index-inround-title'>立地・周辺施設</h3>
            <p className='index-inround-contents'>東北大学YMCA渓水寮から東北大学まではバス・地下鉄で20分、原付で10分かかります。寮の近く(5軒以内)には、ドラッグストアやコンビニ・病院など生活に必要な施設がすべてそろっています。</p>
            <Link href='/location/'><a className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>立地について</a></Link>
          </div>
        </div>
        <div className='cr-box cr-flex'>
          <div>
            <h4 className='index-inround-upper'>Monthly Fees</h4>
            <h3 className='index-inround-title'>寮費</h3>
            <p className='index-fee-fee'>4,7000円/月</p>
            <p className='index-fee-sub'>食事代・水道費・光熱費・ネット代などすべて込み</p>
          </div>
          <p className='cr-desc'>東北大学YMCA渓水寮は卒寮生や東北大学の教員有志などからのご寄付により、寮費を抑えています。寮費の支払いは柔軟に行え、年度末に余った寮費の約半分が返金されます。また、入寮費として3万円かかります（内2万円は卒寮時に返金）。</p>

        </div>
        <div className="card-container">
          <Card title="行事" linkHref="/events/" linkTitle="行事 →" imageSrc="events/hanami.webp" imageAlt="東北大学YMCA渓水寮の個室">
            <p>東北大学YMCA渓水寮では読書会や、花見、クリスマス会などいろいろな行事があります。</p>
          </Card>
          <Card title="寮生の声" linkHref="/messages/" linkTitle="もっと読む">
            <div className="person-box" id="person-box-1">
              <p className="person-name-small">山口
              </p>
              <p className="message-text">
                寮生活の醍醐味といえば未知との遭遇だと思う。当たり前が（同じ日本人というはずなのに）異なる人間と生活スペースを共有するのだから「えっ！？」となるようなことは多数ある。意外な趣味、意外な調理、意外な習慣等々。・・・・・・
              </p>
            </div>
          </Card>
          <Card title="よくある質問" linkHref="/faq/" linkTitle="他の質問を見る →">
            <p className="contents-question">東北大学YMCA渓水寮に門限はありますか？</p>
            <p className="contents-desc">ありません。鍵を持っていれば好きな時間に寮に帰れます。</p>
          </Card>
          <Card title="東北大学YMCA渓水寮の概要">
            <ul>
              <li>寮の定員：１３名</li>
              <li>寮費：月４万７千円</li>
              <li>入寮費：３万円（うち敷金２万円、卒寮時払い戻し）</li>
              <li>寮の設備:鉄筋コンクリート2階建て。1989年渓水寮竣工、築31年。2007年内装改修、2019年外壁塗装、2020年浴室改修。<br />寮生用個室13室、客間、寮母室、ホール、無線LAN5台、全個室有線LAN
              </li>
              <li>寮の共同設備:浴室・シャワー室(鍵付き)トイレ(男女別)、洗面台各階3箇所、洗濯機2台、冷蔵庫3台、掃除機2台、テレビ（ホール、客間）、炊事場（自炊可能）、食器類、駐車場、駐輪場
              </li>
              <li>SNS:</li>
              <a className="link contents-link"
                href="https://twitter.com/keisuiryo">Twitter(寮生活の様子)
                →</a>
              <a className="link contents-link"
                href="https://instagram.com/keisuiryo">Instagram(寮の食事)
                →</a>
            </ul>
          </Card>
          <Card title="東北大学との関係">
            <p className="contents-desc">渓水寮は東北大学の一部の教員やOPの支援を受けていますが、東北大学からは独立した自治寮です。</p>
            <p className="contents-desc">東北大学の運営するユニバーシティハウス（学生寄宿舎）や寮については、東北大学の公式サイトよりご覧ください。</p>
            <a className="link contents-link"
              href="https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0501/">ユニバーシティハウス(東北大学公式サイト)
              →</a>
            <a className="link contents-link"
              href="https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0502/">学寮(東北大学公式サイト)
              →</a>
          </Card>
          <Card title="卒寮生の皆様へ">
            <p className="contents-desc">卒寮生向けのページはこちらです。東北大学YMCA渓水寮の現状や、いただいた寮の運営のためのご支援の活用実績や、渓水寮の電子版会報の閲覧方法などをまとめています。</p>
            <a className="link contents-link" href="https://keisuiryoop.studio.site/">卒寮生向けサイト →</a>
          </Card>
        </div>
      </div>
    </Wrapper>
  )
}