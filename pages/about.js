import Card from './modules/card'
import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper id="about" title="渓水寮とは" desc="東北大学YMCA渓水寮は東北大学とは独立した学生寮です。東北大学YMCAは2026年度をもって解散し、2027年4月から「東北地区学生YMCA（仮称）渓水寮」として新しい運営体制で始まります。月額費用は53,000円です。" >
            <div className="card-container">
                <Card title="『共につくり、共につくられる』">
                    <p className="contents-desc">
                        渓水寮は、決められた仕組みに沿って暮らすだけの場所ではありません。寮生が話し合い、日々の暮らしや行事を一緒につくっていきます。そして、そこで出会う人や重ねる経験を通じて、一人ひとりもまた形づくられていきます。
                    </p>
                    <p className="contents-desc">
                        このキャッチコピーには、寮生が共同生活を共につくり、その営みの中で互いを知り、影響を受けながら暮らすコミュニティを目指す思いを込めています。
                    </p>
                </Card>
                <Card title="YMCAについて" imageSrc="/about/ymca.webp" imageAlt="東北大学YMCA渓水寮が所属するYMCAのブランド写真です。">
                    <div className="recruitment-update-preview">
                        <p className="recruitment-update-preview-label">運営情報・更新プレビュー</p>
                        <p className="contents-desc">
                            東北大学YMCA渓水寮は、これまで日本YMCA同盟の学生YMCAに属していました。YMCAは世界120の国と地域で、およそ6500万人の会員を有するNGOです。東北大学YMCAは2026年度をもって解散し、寮の運営母体が変更します。2027年4月から「東北地区学生YMCA（仮称）渓水寮」として新しい運営体制で始まります。
                        </p>
                    </div>
                    <p className="contents-desc">
                        YMCAはキリスト教精神を基盤として、日本各地で水泳・サッカーなどのスポーツクラブや幼稚園・保育園の運営、国際交流プログラムやボランティア活動の企画といった社会教育事業を展開しています。
                    </p>
                    <a className="link summary-more" href="https://www.ymcajapan.org/society/student/">学生YMCA<span className="summary-more-arrow">→</span></a>
                </Card>
                <Card title="寮の建物の歴史" imageSrc="/about/news.webp" imageAlt="渓水寮の前身となる青年会館を伝える新聞記事です。">
                    <div className="recruitment-update-preview">
                        <p className="recruitment-update-preview-label">沿革記述更新プレビュー</p>
                        <p className="contents-desc">
                            東北大学キリスト教青年会が運営していた寮の建物は、1936年、石原謙先生が東北大学に通うクリスチャンやキリスト教に関心を持つ学生のために私財を投じて建てた青年会館に始まります。
                        </p>
                        <p className="contents-desc">
                            戦後、寮の建物は米軍に接収され、1952年4月に返還されました。その後、建物の老朽化が進んだため、1989年に現在地へ新築・移転しました。
                        </p>
                        <p className="contents-desc">
                            東北大学基督教青年会は2026年度をもって解散し、2027年4月から日本YMCA同盟の支援のもと、東北地区学生YMCAとして運営を開始します。
                        </p>
                    </div>
                </Card>

                <Card title="渓水寮の概要">
                    <ul>
                        <li>寮の定員：１３名</li>
                        <li>月額費用：５万３千円。理事会費（管理費・維持費相当）２万５千円、雑費（光熱費・食費など相当）２万８千円。YMCAの支援により、家賃はかかりません。</li>
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
