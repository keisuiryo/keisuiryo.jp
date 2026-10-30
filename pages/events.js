import Stack from './modules/stack'
import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper title="行事" id="events" desc="東北大学YMCA渓水寮では寮の行事として各自が好きなことを発表する読書会や寮運営を話し合う寮生総会などがあります。他にも花見や芋煮会など任意参加で様々な行事が行われています。">
            <section className="events-base">
                <h2 className="contents-title">定例行事</h2>
                <p className="contents-desc">定例行事は金曜日の夜に行います。毎月第一金曜日は寮生総会、それ以外の金曜日は読書会または聖書研究を開催します。入寮にあたっては、金曜日の夜を定例行事のために確保することを約束していただきます。</p>
                <div className="stack-container">
                    <Stack title="寮生総会">
                        <p className="contents-desc">毎月第一金曜日の夜に開く、寮生自治の最も重要な行事です。寮生全員が共同生活の決まりや行事、係の活動などを話し合い、決定します。全員に出席義務があります。</p>
                    </Stack>
                    <Stack title="読書会">
                        <p className="contents-desc">「読書会」という名前ですが、本を読む回ばかりではありません。担当寮生がテーマを決めて企画するワークショップのような集まりで、ボードゲームなどを楽しむこともあります。寮生同士の親睦を深め、交流を広げる大切な場です。</p>
                    </Stack>
                    <Stack title="聖書研究">
                        <p className="contents-desc">不定期に開催します。牧師による説教を聞くこともあれば、気軽なゲームや日常生活に近いテーマを取り上げることもあります。</p>
                    </Stack>
                </div>
            </section>
            <section className="events-base">
                <h2 className="contents-title">年中行事</h2>
                <p className="contents-desc">入寮式・卒寮式・記念式・クリスマス会は、寮生活の節目となるため原則参加です。それ以外の行事は自由参加ですが、寮生同士の交流のため参加を推奨しています。自由参加の行事にも、費用などの支援があります。</p>
                <div className="events-stream-container">
                    <div className="streamline"></div>
                    <div className="events-stream-list">
                        <Stack title="入寮式・4月" imageSrc="/events/nyuuryousiki.webp" imageAlt="東北大学YMCA渓水寮での入寮式の写真">
                            <p className="contents-desc">新入寮生を歓迎する式典です。新入寮生は自己紹介のスピーチを行います。</p>
                        </Stack>
                        <div className='right'>
                            <Stack title="花見・4月" imageSrc="/events/hanami.webp" imageAlt="三神峯公園での花見の様子。">
                                <p className="contents-desc">近所のお花見スポットに赴きお花見をします。</p>
                            </Stack>
                        </div>
                        <Stack title="記念式・6月">
                            <p className="contents-desc">渓水寮の歩みを振り返る式典です。講師の先生をお招きして、お話を伺います。</p>
                        </Stack>
                        <div className='right'>
                            <Stack title="夏季ゼミ・9月" imageSrc="/events/kakizemi1.webp" imageAlt="学生ymcaでの夏期ゼミの様子">
                                <p className="contents-desc">
                                    南は九州から北は北海道（果ては海を渡ってお隣の国）まで日本全国の学生YMCA会員が集まり、今の世界の問題点について真剣に考えたり、夜遅くまでお酒を飲みつつ語り合ったりします。</p>
                            </Stack>
                        </div>
                        <Stack title="NSCF・9月" imageSrc="/events/ns.webp" imageAlt="東北大学YMCAと北大ymcaとの交流">
                            <p className="contents-desc">北海道大学YMCA汝羊寮の学生と交流します。</p>
                        </Stack>
                        <div className='right'>
                            <Stack title="芋煮会・10月" imageSrc="/events/imoni.webp" imageAlt="東北地方の慣例行事、芋煮の様子">
                                <p className="contents-desc">東北地方の慣例行事です。芋煮とよばれる料理（豚汁）をみんなでつくって食べます。秋のお花見のような行事です。</p>
                            </Stack>
                        </div>
                        <Stack title="クリスマス会・12月" imageSrc="/events/xmas.webp" imageAlt="東北大学YMCA渓水寮のOPを招いたクリスマス会">
                            <p className="contents-desc">クリスマスをお祝いする行事です。講師の先生をお招きしてお話をいただきます。</p>
                        </Stack>
                        <div className='right'>
                            <Stack title="冬ゼミ・2月" imageSrc="/events/huyuzemi.webp" imageAlt="東北大学YMCAと北大ymcaとの交流">
                                <p className="contents-desc">北海道大学YMCA汝羊寮の学生と交流します。</p>
                            </Stack>
                        </div>
                        <Stack title="卒寮式・3月" imageSrc="/events/soturyou.webp" imageAlt="東北大学YMCA渓水寮の卒寮式の様子">
                            <p className="contents-desc">卒業する寮生を送り出す式です。卒寮生が4年間の想いをスピーチにします。</p>
                        </Stack>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
