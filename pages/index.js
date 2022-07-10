import Card from './modules/card'
import Wrapper from './modules/wrapper'

export const config= {
  unstable_runtimeJS: true
}
export default function Home() {
  return (
    <Wrapper imageSrc="main.webp" imageAlt="東北大学YMCA渓水寮の寮生の集合写真" desc={`東北大学生などが暮らす13人のアットホームな学生寮です。寮母さんの食事、月4万円台の寮費が魅力の寮です。
    東北大学YMCA渓水寮は東北大学の新入生の入寮を募集しています。`}>
      <div className="abstract">
        <ul className="point-box">
          <li className="icon-text point-item"><svg className="check-svg">
            <use href="#svg-check" />
          </svg><span><span className="nowrap">朝晩寮母さん手作りの</span><span className="nowrap"><span
            className="strong colored">食事付き</span>の寮</span></span>
          </li>
          <li className="icon-text point-item"><svg className="check-svg">
            <use href="#svg-check" />
          </svg><span><span className="nowrap">定員13名のアットホームな寮</span></span>
          </li>
          <li className="icon-text point-item"><svg className="check-svg">
            <use href="#svg-check" />
          </svg><span><span className="nowrap"><span className="underline">光熱水費・食事・ネット代</span>込みで</span><span
            className="nowrap">寮費が月<span className="colored"><span className="strong">4</span>万<span
              className="strong">7</span>千円</span>の寮</span></span>
          </li>
        </ul>
      </div>
      {/*<div className="important">

        <h3><span>i</span>入寮募集日程について<br />(2/27更新)</h3>
        <p>前期試験を受験された方の入寮受付の締切は3/6(日),入寮可否の通知は3/9(水)となっております。入寮をご検討の方は早めにご連絡ください。後期入試の方の募集など、詳しくは<Link href="/apply/"><a className="link"
        >募集要項</a></Link>をご覧ください。
        </p>

      </div>*/}
      <div className="card-container">
        <Card title="食事" linkHref="/meals/" linkTitle="食事について →" imageSrc="meals/meal_d1.webp" imageAlt="東北大学YMCA渓水寮で提供される食事">
          <p>東北大学YMCA渓水寮では朝夕２食、寮母さんの手作りの食事が提供されています。おいしくて、栄養バランスも考えられた食事です。</p>
        </Card>
        <Card title="寮費">
          <p>東北大学YMCA渓水寮は東北大学の一部の教員や卒寮生からの寄付や設備の共有により、寮費を抑えています。渓水寮では一人暮らしよりも低い費用で生活できます。
          </p>
        </Card>
        <Card title="渓水寮とは" linkHref="/about/" linkTitle="渓水寮とは →">
          <p>渓水寮は東北大学YMCAが運営する寮です。<br />
            東北大学の一部の教員やOPなどの支援のもと寮生の手で運営されている寮です。</p>
        </Card>
        <Card title="設備" linkHref="/facilities/" linkTitle="設備・施設 →" imageSrc="facilities/room.webp" imageAlt="東北大学YMCA渓水寮の個室">
          <p>東北大学YMCA渓水寮には1人1部屋の個室があり、プライベートは確保されています。</p>
        </Card>
        <Card title="通学・周辺施設" linkHref="/location/" linkTitle="通学方法・周辺施設 →" imageSrc="map.webp" imageAlt="東北大学YMCA渓水寮の個室">
          <p>東北大学YMCA渓水寮から東北大学までバス・地下鉄で20分。バイクで10分。寮のそばには生活に便利な施設がたくさんあります。<br />
            寮から徒歩10秒でバス停があるので、定期を持っていると仙台一円を移動できます。</p>
        </Card>
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
          <a className="link contents-link"
            href="https://keisuiryoop.studio.site/">卒寮生向けサイト
            →</a>
        </Card>
      </div>
    </Wrapper>
  )
}
