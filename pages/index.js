import Card from './modules/card'
import Wrapper from './modules/wrapper'
import Link from 'next/link'

export const config = {
  unstable_runtimeJS: true
}
export default function Home() {
  return (
    <Wrapper noheader desc="渓水寮は13名の少人数な食事付きの学生寮です。寮の家賃は食費・光熱費込み月4万７千円。東北大学などに通う男女新入寮生を募集しています。">
      {/*<div className='top-bg-pc'>
        <img className="top-right" src="/top-right.jpg"></img>
        <img className="top-left" src="/top-left.jpg"></img>
        <img className="top-center" src="/top-center.jpg"></img>
      </div>*/}
      <img className="top-bg-mobile" src="/top-mobile.webp"></img>
      <img className="top-bg-pc" src="/top-bg.webp"></img>
      <div className="top-idt-box">
        <img className="top-idt-img" src="/ymca-logo.webp"></img>
        <h1 className="top-idt"><span className="top-idt-sub">東北大学YMCA</span>渓水寮</h1>
      </div>
      {/*<div className="important">

        <h3><span>i</span>入寮募集日程について<br />(2/27更新)</h3>
        <p>前期試験を受験された方の入寮受付の締切は3/6(日),入寮可否の通知は3/9(水)となっております。入寮をご検討の方は早めにご連絡ください。後期入試の方の募集など、詳しくは<Link href="/apply/"><a className="link"
        >募集要項</a></Link>をご覧ください。
        </p>

      </div>*/}

      <div className='top-contents-wrapper'>

        <div className="desc-box" >
          <h2 className='desc-title'>東北大学YMCA渓水寮は、</h2>
          <p className='desc-text'>朝晩寮母さんが食事を作ってくださる食事つきの学生寮です。寮費は月4万6千円で、食費や光熱費などすべて含まれています。定員は13名と少人数です。</p>
        </div>
        <div className="important">
          <h3><span>i</span>入寮募集受付中(10/7更新)</h3>
          <p>今年度は新入生を2名程度募集しております。詳しくは以下をご覧ください。</p>
          {/*<p>今年度の募集は終了いたしました。たくさんのご応募ありがとうございました</p>*/}
          <Link href='/apply/' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
    </span>募集要項</Link>
    </div>
        <div className='round-box index-round-box index-r-about'>
          <div className='index-inround-box'>
            <h3 className='index-inround-title'>渓水寮とは</h3>
            <p className='index-inround-contents'>渓水寮は、東北大学YMCA(キリスト教青年会)の寮です。1928年に建立され、建物は変われど90年以上の歴史を持ちます。現在は東北大学などの教員有志や、卒寮生のご厚意の下運営されています。</p>
            <Link href='/about/' className='index-inround-link index-link-about'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>理事長あいさつ・寮の概要</Link>
          </div>
          <img loading="lazy" className="inround-small-img index-about-img" src="/illust1.webp" />
        </div>
        <h3 className='index-header index-header-1'>渓水寮での生活</h3>
        <div className='cr-box index-cr-1'>
          <div className='cr-flex cr-flex-1'>
            <div>
              <h3 className='box-title life-title'>少人数</h3>
              <p className='box-desc'>渓水寮には１３人の個性豊かな寮生が住んでいます。少人数で、アットホームな雰囲気です。一人一人の生活を大切にしながら、共同生活を送っています。</p>
            </div>
            <img loading="lazy" className="inround-small-img" src="/life-bg1.webp" />
          </div>
          <div className='cr-flex'>
            <div>
              <h3 className='box-title life-title'>自治寮</h3>
              <p className='box-desc'>渓水寮は理事の先生方の支援のもと寮生の手で運営されている、日本でも数少ない自治寮です。少人数ですので、気兼ねなく意見を言ったり議論したりできます。</p>
            </div>
            <img loading="lazy" className="inround-small-img" src="/life-bg2.webp" />
          </div>
          <div></div>
          <Link href='https://keisuiryo.studio.site/life' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
            arrow_forward_ios
          </span>寮生活について</Link>
        </div>
        <h3 className='index-header'>渓水寮の特長</h3>
        <div className='round-box index-round-box index-r-1'>
          <img loading="lazy" className="index-inround-img" src="/meals.webp" />
          <div className='index-inround-box'>
            <h4 className='index-inround-upper'>Meals</h4>
            <h3 className='index-inround-title'>食事</h3>
            <p className='index-inround-contents'>東北大学YMCA渓水寮では、寮母さんが授業日の朝晩に食事を作ってくださります。おいしく、栄養バランスも考えられている食事です。</p>
            <Link href='/meals/' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>食事について</Link>
          </div>
        </div>
        <div className='round-box index-round-box'>
          <img loading="lazy" className="index-inround-img" src="/facilities.webp" />
          <div className='index-inround-box'>
            <h4 className='index-inround-upper'>Facilities</h4>
            <h3 className='index-inround-title'>設備</h3>
            <p className='index-inround-contents'>東北大学YMCA渓水寮では一人一人に個室があります。ほかにも、ホールや客間などの共用施設も充実しています。トイレとお風呂場は最近新しくなりました。</p>
            <Link href='/facilities/' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>施設について</Link>
          </div>
        </div>
        <div className='round-box index-round-box'>
          <img loading="lazy" className="index-inround-img" src="/map.png" />
          <div className='index-inround-box'>
            <h4 className='index-inround-upper'>Locations</h4>
            <h3 className='index-inround-title'>立地・周辺施設</h3>
            <p className='index-inround-contents'>東北大学YMCA渓水寮から東北大学まではバス・地下鉄で20分、原付で10分かかります。寮の近く(5軒以内)には、ドラッグストアやコンビニ・病院など生活に必要な施設がすべてそろっています。</p>
            <Link href='/location/' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>立地について</Link>
          </div>
        </div>
        <div className='cr-box cr-flex'>
          <div className='ifee-b1'>
            <h4 className='index-inround-upper'>Monthly Fees</h4>
            <h3 className='index-inround-title'>寮費</h3>
            <p className='index-fee-fee'>46,000円/月</p>
            <p className='index-fee-sub'>食事代・水道費・光熱費込み</p>
          </div>
          <p className='cr-desc ifee-b2'>東北大学YMCA渓水寮は卒寮生や東北大学の教員有志などからのご寄付により、寮費を抑えています。寮費の支払いは柔軟に行え、年度末に余った寮費の約半分が返金されます。月々の寮費とは別にネット代として4,000円/年をいただきます。また、入寮費として3万円かかります（内2万円は卒寮時に返金）。</p>

        </div>
        <div className='smsg-wrapper'>
          <div className='smsg-tbox'>
            <h4 className='index-inround-upper voice-up'>Voice</h4>
            <h3 className='box-title voice-title'>寮生の声</h3>
          </div>
          <p className='smsg-box'>まず、この寮の悪い面から見ていきましょう。物事はいい面ばかり見てはいけないですからね！それは・・・</p>
          <Link
            href='https://keisuiryo.studio.site/voice'
            className='index-inround-link smsg-btn'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>寮生の声をもっと読む</Link>
        </div>
        <div className='smsg-wrapper'>
          <div className='smsg-tbox'>
            <h4 className='index-inround-upper voice-up'>FAQ</h4>
            <h3 className='box-title voice-title'>よくある質問</h3>
          </div>
          <div className='smsg-box'>
            <p className='smsg-q'>東北大学YMCA渓水寮に門限はありますか？</p>
            <p className='smsg-a'>ありません。ただし、安全のため寮生に合鍵を配布したのち夜間は施錠しています。また、寮生の個室には鍵がついています。
            </p>
          </div>
          <div className='smsg-box'>
            <p className='smsg-q'>上下関係は厳しいですか？<br />飲酒の強制はありますか？</p>
            <p className='smsg-a'>先輩後輩の上下関係はなく、学年に関わらず交流できます。また、飲酒の強制は一切ありません。</p>
          </div>
          {/*<div className='smsg-box'>
            <p className='smsg-q'>大学院・中途年度編入からでも寮に入れますか？</p>
            <p className='smsg-a'>今年度は院生の募集は行っておりません（来年度以降は未定です）。大学新入生が一人だけにならないようにするためです。詳しくは募集要項をご覧ください。
            </p>
          </div>*/}
          <Link
            href='https://keisuiryo.studio.site/faq'
            className='index-inround-link smsg-btn'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>他の質問を見る</Link>
        </div>
        <div className='cr-box cr-flex iapply-box'>
          <div>
            <h4 className='box-title iapply-title'>入寮方法</h4>
            <p className='box-desc iapply-desc'>東北大学YMCA渓水寮では、東北大学などに通う男女新入生を募集しております。詳しくは募集要項をご覧ください。また、ご質問などありましたらお気軽にお問合せください。</p>
          </div>
          <div>
            <Link href='/apply/' className='index-inround-link iapply-btn'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>募集要項</Link>
          </div>
        </div>
        <div className='cr-box iop-box'>
          <h4 className='box-title iop-title'>卒寮生の方へ</h4>
          <p className='box-desc iop-desc'>東北大学YMCA渓水寮の近況や、いただいた寮の運営のためのご寄付の活用実績、渓水寮の電子版会報の閲覧方法などをまとめています。</p>
          <Link
            href='https://keisuiryo.studio.site/'
            className='index-inround-link iop-btn'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>卒寮生用サイト</Link>
        </div>
        <div className='cr-box iuniv-box'>
          <h4 className='box-title iuniv-title'>東北大学との関係</h4>
          <p className='box-desc iuniv-desc'>渓水寮は東北大学の一部の教員の支援を受けていますが、東北大学とは関係ありません。
            東北大学の運営するユニバーシティハウス（学生寄宿舎）や寮については、東北大学の公式サイトよりご覧ください。</p>
          <Link
            href='https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0501/'
            className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>ユニバーシティ・ハウス</Link><br />
          <Link
            href='https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0502/'
            className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>学寮</Link>
          <p className='box-desc iuniv-desc'>※いずれも東北大学公式サイトです。</p>
        </div>
      </div>
    </Wrapper>
  );
}
