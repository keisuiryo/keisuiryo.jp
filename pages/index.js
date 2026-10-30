import Card from './modules/card'
import Wrapper from './modules/wrapper'
import AnnounceModal from './modules/announce-modal'
import Link from 'next/link'

export const config = {
  unstable_runtimeJS: true
}
export default function Home() {
  return (
    <Wrapper noheader desc="東北地区学生YMCA（仮称）渓水寮は、東北大学の学生寮をお探しの方にもご案内する、定員13名の食事付き学生寮です。月額53,000円に食費・管理費・維持費・光熱費・水道代がすべて含まれます。家賃はYMCAの支援によりかかりません。2027年4月入寮生を募集します。">
      <AnnounceModal />
      {/*<div className='top-bg-pc'>
        <img className="top-right" src="/top-right.jpg"></img>
        <img className="top-left" src="/top-left.jpg"></img>
        <img className="top-center" src="/top-center.jpg"></img>
      </div>*/}
      <section className="top-hero" aria-label="東北地区学生YMCA（仮称）渓水寮">
        <img className="top-bg-mobile" src="/top-mobile.webp" alt="" aria-hidden="true" />
        <img className="top-bg-pc" src="/top-bg.webp" alt="" aria-hidden="true" />
        <div className="top-idt-box">
          <img className="top-idt-img" src="/ymca-logo.webp" alt="" />
          <h1 className="top-idt"><span className="top-idt-sub">東北地区学生YMCA（仮称）</span>渓水寮</h1>
        </div>
        <h2 className="top-catch">
          <img src="/catchphrase-handwriting.png" alt="共につくり、共に造られる" />
        </h2>
      </section>
      {/*<div className="important">

        <h3><span>i</span>入寮募集日程について<br />(2/27更新)</h3>
        <p>前期試験を受験された方の入寮受付の締切は3/6(日),入寮可否の通知は3/9(水)となっております。入寮をご検討の方は早めにご連絡ください。後期入試の方の募集など、詳しくは<Link href="/apply/"><a className="link"
        >募集要項</a></Link>をご覧ください。
        </p>

      </div>*/}

      <div className='top-contents-wrapper'>

        <details className='top-announce'>
          <summary className='top-announce-title'>
            <span className="material-symbols-rounded top-announce-icon">book_2</span>
            <span className="top-announce-heading">
              <span>旧・東北大学基督教青年会からのお知らせ</span>
              <span className="top-announce-subtitle">会報原稿・クリスマス会2026など</span>
            </span>
            <span className="material-symbols-rounded top-announce-chevron" aria-hidden="true">expand_more</span>
          </summary>
          <div className='top-announce-text'>
            <h4>解散の集いへのご出席ありがとうございました</h4>
            <p>東北大学基督教青年会「解散の集い」は、9月25日に感謝のうちに終えることができました。ご参加くださった皆さま、ありがとうございました。会場41名（寮生10名）、オンライン6名の方にご参加いただきました。詳細は会報62号に掲載します。当日スピーチをいただいた方には、会報掲載にあたりお問い合わせする場合があります。</p>

            <h4>会報原稿を募集しています</h4>
            <p>原稿は編集子である理事長宛にメールでお送りください。</p>
            <p>解散の集いに参加した感想や、寮を出てからの歩みなど、内容は自由です。仲間内で編集していただく形も歓迎します。集まりの写真を添える場合は、掲載されている方のお名前もお知らせください。</p>
            <p><strong>締切：11月8日（日）</strong><br />理事長・畠山祥正：<a href='mailto:hatakey@nifty.com'>hatakey@nifty.com</a></p>
            <a className='top-announce-action' href='mailto:hatakey@nifty.com?subject=%E4%BC%9A%E5%A0%B1%E5%8E%9F%E7%A8%BF'>原稿を送る</a>

            <p className='top-announce-christmas-callout'>クリスマス会に参加したい方は以下に申し込みください。</p>
            <dl className='top-announce-details'>
              <div><dt>【日時】</dt><dd>2026年12月12日（土）16時30分～</dd></div>
              <div><dt>【会場】</dt><dd>渓水寮</dd></div>
              <div><dt>【内容】</dt><dd>講師　齋藤 篤先生（日本キリスト教団仙台宮城野教会牧師）</dd></div>
              <div><dt>【会費】</dt><dd>お一人 1000円程度（当日お支払い）</dd></div>
              <div className='top-announce-deadline'><dt>【回答期限】</dt><dd>11月12日</dd></div>
            </dl>
            <p className='top-announce-note'>※会員以外からの直接申込はできません。</p>
            <p>【連絡先】<a href='mailto:keisuiryo@gmail.com'>keisuiryo@gmail.com</a></p>
            <a className='top-announce-action' href='https://docs.google.com/forms/d/e/1FAIpQLScupUnRrdvv2F3LEgeCl4m9DYEd9an8-ys9zP8YzGf2mWr-Ng/viewform?usp=dialog' target='_blank' rel='noopener noreferrer'>申し込む</a>

            <h4>2027年4月以降について</h4>
            <p>東北大学基督教青年会寮史編集委員会を立ち上げ、毎年度成果を発表しながら『青年会寮史』の刊行を目指します。同窓会機能は当面引き継ぎます。<br />（理事長・畠山祥正）</p>
          </div>
        </details>

        <div className="desc-box recruitment-update-preview">
          <p className="recruitment-update-preview-label">2027年度募集・更新プレビュー</p>
          <h2 className='desc-title'>東北地区学生YMCA（仮称）渓水寮は、</h2>
          <p className='desc-text'>朝晩、寮母さんが食事を作る食事付き学生寮です。月額53,000円の内訳は、理事会費（管理費・維持費相当）25,000円、雑費（光熱費・食費など相当）28,000円です。YMCAの支援により、家賃はかかりません。定員13名です。東北大学YMCAは2026年度をもって解散し、寮の運営母体が変更します。2027年4月から新しい運営体制で始まり、入寮生を募集します。現在は東北大学の学生が多く暮らしています。</p>
        </div>
        <div className="important recruitment-update-preview">
          <p className="recruitment-update-preview-label">募集情報・更新プレビュー</p>
          <h3><span>i</span>2027年4月入寮生を募集します</h3>
          <p>対象は、寮での共同生活を共に送れる大学生・大学院生・研究生・通信制の学校に在籍する学生などです。現在は東北大学の学生が多く暮らしていますが、東北大学の学生に限った募集ではありません。</p>
          <Link href='/apply/' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
    </span>募集要項</Link>
    </div>
        <div className='round-box index-round-box index-r-about'>
          <div className='index-inround-box recruitment-update-preview'>
            <p className="recruitment-update-preview-label">名称・運営情報の更新プレビュー</p>
            <h3 className='index-inround-title'>渓水寮とは</h3>
            <p className='index-inround-contents'>渓水寮は、東北大学YMCAのもとで運営されてきた学生寮です。東北大学YMCAは2026年度をもって解散し、寮の運営母体が変更します。2027年4月から「東北地区学生YMCA（仮称）渓水寮」として新しい運営体制で始まります。</p>
            <Link href='/about/' className='index-inround-link index-link-about'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>寮の概要</Link>
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
          <Link href='/life/' className='index-inround-link'><span className="material-symbols-rounded index-link-icon">
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
        <div className='cr-box cr-flex recruitment-update-preview'>
          <div className='ifee-b1'>
            <p className="recruitment-update-preview-label">料金情報更新プレビュー</p>
            <h4 className='index-inround-upper'>Monthly Fees</h4>
            <h3 className='index-inround-title'>寮費</h3>
            <p className='index-fee-fee'>53,000円/月</p>
            <p className='index-fee-included'>食費・管理費・維持費・光熱費・水道代、すべて込み！</p>
            <p className='index-fee-breakdown-label'>内訳：</p>
            <p className='index-fee-sub'>理事会費（管理費・維持費相当）25,000円<br />雑費（光熱費・水道代・食費など相当）28,000円<br />家賃はYMCAの支援によりかかりません</p>
          </div>
          <p className='cr-desc ifee-b2'>月額53,000円に食費・管理費・維持費・光熱費・水道代がすべて含まれます。内訳は理事会費（管理費・維持費相当）25,000円、雑費（光熱費・水道代・食費など相当）28,000円です。家賃はYMCAの支援によりかかりません。</p>

        </div>
        <div className='smsg-wrapper'>
          <div className='smsg-tbox'>
            <h4 className='index-inround-upper voice-up'>Voice</h4>
            <h3 className='box-title voice-title'>寮生の声</h3>
          </div>
          <p className="recruitment-update-preview-label">紹介文更新プレビュー</p>
          <p className='smsg-box recruitment-update-preview'>寮での暮らしを、寮生の言葉で紹介します。食事や人間関係、生活の中で感じたことなど、よいところも気になるところも率直に綴っています。</p>
          <Link href='/messages/' className='index-inround-link smsg-btn'>寮生の声を読む</Link>
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
          <Link href='/faq/' className='index-inround-link smsg-btn'>よくある質問を見る</Link>
        </div>
        <div className='cr-box cr-flex iapply-box recruitment-update-preview'>
          <div>
            <p className="recruitment-update-preview-label">募集情報・更新プレビュー</p>
            <h4 className='box-title iapply-title'>入寮方法</h4>
            <p className='box-desc iapply-desc'>2027年4月入寮生を募集します。大学生・大学院生・研究生・通信制の学校に在籍する学生などが対象です。現在は東北大学の学生が多く暮らしています。詳しくは募集要項をご覧ください。</p>
          </div>
          <div>
            <Link href='/apply/' className='index-inround-link iapply-btn'><span className="material-symbols-rounded index-link-icon">
              arrow_forward_ios
            </span>募集要項</Link>
          </div>
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
