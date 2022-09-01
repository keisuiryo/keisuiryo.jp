import Card from './modules/card'
import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper id="about" title="渓水寮とは" desc="東北大学YMCA渓水寮は東北大学とは独立しており、東北大学の教員などの支援のもと寮生の手で運営されています。キリスト教精神をもとにした学生YMCAに属しています。寮生の多数はノンクリスチャンで、クリスチャンでなくても入寮できます。" >
            <div className="card-container">
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
                        東北帝国大学基督教青年会(東北大学YMCAの旧称)は1928年に発足し、翌8年後の1936年に青年会館(寮)は当時、東北帝国大学法文学部長であった石原謙先生が同大学に通うクリスチャンやキリスト教に関心を持つ学生のために私財を投じて建てられました。
                    </p>
                    <p className="contents-desc">
                        戦後、寮の建物は米軍に接収され、返還されたのは1952年4月でした。その後建物の老朽化が進んだため、1989年、現在地に新築、移転しました。
                    </p>
                    <p className="contents-desc">1997年からは男子・女子ともに生活することとなりました。</p>
                    <p className="contents-desc">なお、寮生の多くはノンクリスチャンです。</p>
                </Card>
                <Card title="男女混住について">
                    <p>渓水寮は、京大熊野寮や北大恵迪寮など数多くの学生寮と同じく男女混住となっています。男女混住と聞いて不安になる方もいるかと思いますが、渓水寮ではトラブルが起きたことは今までありません。</p>
                    <p>また、トラブルを事前に防ぐために以下のような対策がとられています。</p>
                    <ul>
                        <li>風呂・脱衣場には鍵がついており、ドアに使用中の札をかけて使用します。</li>
                        <li>トイレは男女別です。</li>
                        <li>基本男子は１階、女子は２階の部屋になります。</li>
                        <li>各部屋にバルコニーがついており、また部屋干しもできます。</li>
                        <li>男女混住の誓約書が定められています。</li>
                    </ul>
                    <p>なお、2022年現在での男女比は9:4です。</p>
                    <div className="quote-box">
                        <h5 className="quote-title">男女混住の誓約</h5>
                        <p className="quote-text">
                            私達渓水寮生は、両性の平等の名の下に、人としての個性が没却され、殊更両性の同権のみが強調される現代社会において、異性の異性として侵してはならない。 領域を正しく認識すると共に、異性を等しく個性ある人間として接することにより、異性への無知と偏見とを除去し、本寮における稀有な経験を社会に還元する名誉ある地位を占めたいと思う。 私達は、誰でも、同性の立場にのみ専念して異性を軽視してはならないのである。この道徳は普遍的なものであり、この道徳に従うことは、本寮において、異性と協和して生活する者の責務であると信じる。
                        </p>
                    </div>
                </Card>
                <Card title="理事あいさつ">
                    <div className="person-box about-person-box compact">
                        <img loading="lazy" width="400" height="300" className="person-img about-person-img" src="/about/drkainuma.webp" alt="東北大学の貝沼亮介教授の写真です。渓水寮の理事長です。" />
                        <div className="person-desc">
                            <p className="person-name">貝沼亮介</p>
                            <p className="person-org">東北大学教授</p>
                        </div>
                    </div>
                    <p className="message-text">渓水寮は、東北大学基督教青年会(東北大学 YMCA)の寮です。 当寮は寮の趣旨に賛同する東北大学 などの教官や寮のOPなど多くの
                        方々の厚意で運営されていますが、寮生活そのものは、寮に住んでいる学生の自治に委ねられています。渓水寮は1997年から男子・女子共に生活する男女混住寮になりました。現在寮では
                        1-4 年生及び大学院生の13名(男子 10名,女子 3名)の学生が共同生活を行っています。個人の生活を尊重しながら
                        寮の運営を学生たちが自治で行い、聖書研究や他大学の同じ志の寮との交流、講演会など、共同生活の良さを体験します。仙台での大学生活を渓水寮で一緒に過ごしませんか?
                    </p>
                </Card>
            </div >
        </Wrapper >
    )
}