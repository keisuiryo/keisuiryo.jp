import Card from './modules/card'
import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper id="facilities" title="設備" desc="東北大学YMCA渓水寮では一人一部屋6畳の個室があり、プライベートは守られます。ホールや台所といった共用スペースもあります。トイレと風呂は共同ですが最近新しくなりました。">
            <div className="card-container">
                <Card title="個室" imageSrc="/facilities/room.webp" imageAlt="渓水寮の個室は鍵やベット、机などが付いています。">
                    <p className="contents-desc">6畳のフローリングです。エアコンとベッド・机・椅子が設置してあり、Wifiと光有線LANに繋げます。</p>
                    <p className="contents-desc">物干し竿もしくはバルコニーと大容量の収納もあります。ある程度の防音性能と鍵がついています。</p>
                    <p className="contents-desc">また、女子の個室は２階で、女子同士が隣部屋に配置されます。</p>
                </Card>
                <Card title="ホール" imageSrc="/facilities/hall.webp" imageAlt="渓水寮のホールはテレビやゲームがあり、行事や食事の時に使います。">
                    <p className="contents-desc">食事や朝拝、寮生総会などで使います。</p>
                    <p className="contents-desc">テレビやゲーム機、ピアノやドラム、たくさんの歴史ある本、プリンターなどがあり、Wifiも繋がっています。</p>
                    <div className="person-box" id="facility-person-box-f1">
                        <p className="person-name-small">倉本(1年)
                        </p>
                        <p className="message-text">
                            食事の時じゃなかったらあんまり人はいないので、勉強などするのにもってこいですよ！
                        </p>
                    </div>
                </Card>
                <Card title="台所" imageSrc="/facilities/kitchen.webp" imageAlt="渓水寮の台所は炊飯器や食器、コンロがあり食事を作れます。">
                    <p className="contents-desc">寮母さんが食事を作るときや寮生が自炊するときに使います。共用の冷蔵庫や多数の食器があり、調理器具も豊富で自由に使うことができます。</p>
                    <p className="contents-desc">オーブンや電子レンジ・炊飯器もあります。</p>
                </Card>
                <Card title="トイレ" imageSrc="/facilities/toilet.webp" imageAlt="渓水寮の個室は鍵やベット、机などが付いています。">
                    <p className="contents-desc">2013年に新しくなった洋式のトイレです。</p>
                    <p className="contents-desc">トイレは男女別で、１階に男子用、２階に女子用があります。</p>
                </Card>
                <Card title="風呂" imageSrc="/facilities/bath.webp" imageAlt="渓水寮には浴室があり、洗濯機もついています。">
                    <p className="contents-desc">お風呂は男女共用です。浴槽付きの浴室とシャワー室があります。お風呂・脱衣場には鍵がついており、ドアに使用中の札をかけて使用します。</p>
                    <p className="contents-desc">また、自由に使える洗濯機が二台と体重計があります。</p><p>洗濯機とお風呂を使用する際は、脱衣所前にあるボードに自分の名札を張って使うことで、トラブルがないようにしています。</p>
                </Card>
                <Card title="客間" imageSrc="/facilities/guest.webp" imageAlt="渓水寮の客間は漫画などがあり、友達を泊められます。">
                    <p className="contents-desc">寮生の知人や家族ならどなたでも泊まっていただくことができます。簡易ベッドや、テレビ、こたつ、パソコン、過去の寮生が残していった漫画本などがあります。
                    </p>
                    <p className="contents-desc">
                        他には寮生の飲み会をここで行うこともあります。（飲み会の参加は任意で、お酒の強要は全くありません。）窓の外には仙台市南部の景色が広がり、空気が澄んでいるとき遠く蔵王の山並みを眺めることができます。
                    </p>
                </Card>
                <img loading="lazy" className="header-image" src="/facilities/games.webp" alt="渓水寮の寮生がゲームしている写真" />
            </div>
        </Wrapper>
    )
}