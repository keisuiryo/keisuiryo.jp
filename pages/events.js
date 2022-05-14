import Stack from './modules/stack'
import Wrapper from './modules/wrapper'

export const config= {
  unstable_runtimeJS: true
}
export default function Home() {
    return (
        <Wrapper title="行事" id="events" desc="東北大学YMCA渓水寮では寮の行事として各自が好きなことを発表する読書会や寮運営を話し合う寮生総会などがあります。他にも花見や芋煮会など任意参加で様々な行事が行われています。">
            <section className="events-base">
                <h2 className="contents-title">定例行事</h2>
                <div className="stack-container">
                    <Stack title="読書会" imageSrc="/events/bookclub.webp" imageAlt="東北大学YMCA渓水寮で行われる読書会の様子">
                        <p className="contents-desc">年に１３回行われ、各回持ち回りで寮生が自由にテーマを設定します。形式は議論やワークショップなど様々です。 </p>
                        <h6 className="contents-title-tiny">過去のテーマ例</h6>
                        <ul>
                            <li>ルービックキューブ６面攻略体験</li>
                            <li>価値観とあなた、それと私</li>
                            <li>自動車と環境問題</li>
                            <li>ハンドクラップ（手拍子）ことはじめ</li>
                            <li>政軍関係と現代民主主義政治</li>
                        </ul>
                    </Stack>
                    <Stack title="寮生総会" imageSrc="/events/meeting.webp" imageAlt="東北大学YMCA渓水寮で行われる寮生総会の様子">
                        <p className="contents-desc">毎月１回行われます。東北大学YMCA渓水寮は自治寮なので、寮生活のルールなどについて話し合います。</p>
                    </Stack>
                    <Stack title="朝拝" imageSrc="/events/chohai.webp" imageAlt="東北大学YMCA渓水寮で行われる朝拝の写真です。">
                        <p className="contents-desc">毎朝の食事の前に讃美歌を唄い、聖書の朗読を行います。</p>
                    </Stack>
                    <Stack title="聖書研究">
                        <p className="contents-desc">年に２〜３回行われます。聖書の理解を深めたり、日常生活と聖書の関わりを考えたりします。</p>
                    </Stack>
                </div>
            </section>
            <section className="events-base">
                <h2 className="contents-title">年中行事</h2>
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
                        <Stack title="献堂記念式・6月" imageSrc="/events/kendou.webp" imageAlt="東北大学YMCA渓水寮のOPを招いた献堂記念式">
                            <p className="contents-desc">講師の先生をお招きしてお話をいただきます。</p>
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