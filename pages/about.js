import Card from './modules/card'
import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper id="about" title="渓水寮とは" desc="東北大学YMCA渓水寮は東北大学とは独立しており、東北大学の教員などの支援のもと寮生の手で運営されています。キリスト教精神をもとにした学生YMCAに属しています。寮生の多数はノンクリスチャンで、クリスチャンでなくても入寮できます。" >
            <div className="card-container">
                <Card title="理事あいさつ">
                    <div className="person-box about-person-box compact">
                        <img loading="lazy" width="400" height="300" className="person-img about-person-img" src="/about/drkainuma.webp" alt="東北大学の貝沼亮介教授の写真です。渓水寮の理事長です。" />
                        <div className="person-desc">
                            <p className="person-name">貝沼亮介</p>
                            <p className="person-org">東北大学教授</p>
                        </div>
                    </div>
                    <p className="message-text">渓水寮は、東北大学基督教青年会(東北大学YMCA)の寮です。当寮は寮の趣旨に賛同する東北大学などの教官や寮のOPなど多くの
                        方々の厚意で運営されていますが、寮生活そのものは、寮に住んでいる学生の自治に委ねられています。渓水寮は1997年から男子・女子共に生活する男女混住寮になりました。現在寮では
                        1-4年生の11名(男子 7名,女子 4名)の学生が共同生活を行っています。個人の生活を尊重しながら
                        寮の運営を学生たちが自治で行い、聖書研究や他大学の同じ志の寮との交流、講演会など、共同生活の良さを体験します。仙台での大学生活を渓水寮で一緒に過ごしませんか?
                    </p>
                </Card>
                <Card title="YMCAについて" imageSrc="/about/ymca.webp" imageAlt="東北大学YMCA渓水寮が所属するYMCAのブランド写真です。">
                    <p className="contents-desc">
                        東北大学YMCA渓水寮は日本YMCA同盟の一部門である学生YMCAに属している寮です。YMCAは世界120の国と地域で、およそ6500万人の会員を有するNGOです。
                    </p>
                    <p className="contents-desc">
                        YMCAはキリスト教精神を基盤として、日本各地で水泳・サッカーなどのスポーツクラブや幼稚園・保育園の運営、国際交流プログラムやボランティア活動の企画といった社会教育事業を展開しています。
                    </p>
                    <a className="link summary-more" href="https://www.ymcajapan.org/society/student/">学生YMCA<span className="summary-more-arrow">→</span></a>
                </Card>
                <Card title="歴史" imageSrc="/about/news.webp" imageAlt="東北大学YMCA渓水寮を紹介する新聞です。">
                    <p className="contents-desc">
                        東北帝国大学基督教青年会(東北大学YMCAの旧称)は1928年に、1928年に当時東北大学の総長(第５代)だった井上仁吉教授を会長に、法文学部長だった石原謙教授を副会長に発足しました。<br />
                        8年後の1936年に、石原謙先生が同大学に通うクリスチャンやキリスト教に関心を持つ学生のために私財を投じて青年会館(寮)を建てられました。
                    </p>
                    <p className="contents-desc">
                        戦後、寮の建物は米軍に接収され、返還されたのは1952年4月でした。その後建物の老朽化が進んだため、1989年、現在地に新築、移転しました。
                    </p>
                    <p className="contents-desc">1997年からは男子・女子ともに生活することとなりました。</p>
                    <p className="contents-desc">なお、寮生の多くはノンクリスチャンです。</p>
                </Card>

                <Card title="東北大学YMCA渓水寮の概要">
                    <ul>
                        <li>寮の定員：１３名</li>
                        <li>寮費：月４万８千円</li>
                        <li>ネット代：年４千円</li>
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
            </div >
        </Wrapper >
    )
}
