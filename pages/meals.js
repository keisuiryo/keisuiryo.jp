import Wrappr from './modules/wrapper'

export const config= {
  unstable_runtimeJS: true
}
export default function Home() {
    function mealCard(menus, src, imgdesc, isexpanded = false) {
        function menuui(menus) {
            let result = []
            for (let menu of menus) {
                result.push((<li className="meal-item">{menu}</li>))
            }
            return result;
        }
        return (
            <div className="meal-box">
                <label className="meal-label">
                    <input className="meal-expand-input" type="checkbox" checked={isexpanded} />
                    <svg className="meal-expand-img">
                        <use href="#svg-expand" />
                    </svg>
                    <svg className="meal-close-img">
                        <use href="#svg-close" />
                    </svg>
                    <img loading="lazy" width="400" height="300" src={src} className="meal-image"
                        alt={imgdesc} />
                    <ul className="meal-item-box">
                        {menuui(menus)}
                    </ul>
                </label>
            </div>)
    }
    const breakfasts = [ {
        "menus": [
            "パン",
            "クリームスープ",
            "ポテトサラダ",
            "ウインナー"
        ],
        "src": "/meals/meal_m1.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",
    },{
        "menus": [
            "ご飯",
            "お味噌汁",
            "焼き鮭",
            "卵焼き",
            "納豆",
            "きんぴら"
        ],
        "src": "/meals/meal_m2.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",
    }, {
        "menus": [
            "ご飯",
            "豚汁",
            "さんまの煮物",
            "スクランブルエッグ",
            "昆布の煮物",
            "やきピーマン"
        ],
        "src": "/meals/meal_m3.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",
    }, {
        "menus": [
            "ご飯",
            "お味噌汁",
            "さつまいもとリンゴの煮物",
            "小松菜の煮浸し",
            "目玉焼き"
        ],
        "src": "/meals/meal_m4.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",
    }, {
        "menus": [
            "ご飯",
            "豆乳のお味噌汁",
            "キャベツの煮物",
            "目玉焼き",
            "冷奴"
        ],
        "src": "/meals/meal_m5.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",
    }, {
        "menus": [
            "パン",
            "コンソメスープ",
            "ほうれん草のグラタン",
            "りんご"
        ],
        "src": "/meals/meal_m6.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",
    }, ];
    const dinners = [{
        "menus": [
            "ご飯",
            "お味噌汁",
            "鳥の唐揚げ",
            "きゅうりの酢の物",
            "青菜の胡麻和え"
        ],
        "src": "/meals/meal_d1.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }, {
        "menus": [
            "ご飯",
            "すまし汁",
            "酢豚",
            "千切り大根とにんじんの煮物",
            "もやしのナムル"
        ],
        "src": "/meals/meal_d2.webp",
        "imgdesc": "晩の食事の写真で、酢豚などあります。",

    },  {
        "menus": [
            "ご飯",
            "お味噌汁",
            "たらのフライ",
            "豚肉の生姜焼き",
            "にんじんのサラダ"
        ],
        "src": "/meals/meal_d3.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }, {
        "menus": [
            "カレーライス",
            "サラダ"
        ],
        "src": "/meals/meal_d5.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }, {
        "menus": [
            "ご飯",
            "麻婆豆腐",
            "キムチと豆腐の炒め物",
            "青菜のおひたし"
        ],
        "src": "/meals/meal_d4.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }, {
        "menus": [
            "ご飯",
            "お味噌汁",
            "コロッケ",
            "冷奴",
            "れんこんの煮物"
        ],
        "src": "/meals/meal_d7.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    },{
        "menus": [
            "ご飯",
            "お味噌汁",
            "天ぷら",
            "魚の煮付け",
        ],
        "src": "/meals/meal_d8.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }, {
        "menus": [
            "ご飯",
            "お味噌汁",
            "しゅうまい",
            "わかめと大根のサラダ",
            "にんじんともやしのマムル"
        ],
        "src": "/meals/meal_d9.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }, {
        "menus": [
            "ご飯",
            "すまし汁",
            "餃子",
            "カボチャの煮付け"
        ],
        "src": "/meals/meal_d10.webp",
        "imgdesc": "晩の食事の写真で、鳥の唐揚げなどあります。",
    }]

    let dinnerdom = []
    for (let b of dinners) {
        dinnerdom.push(mealCard(b.menus, b.src, b.imgdesc))
    }
    let breakfastdom = []
    for (let b of breakfasts) {
        breakfastdom.push(mealCard(b.menus, b.src, b.imgdesc))
    }

    return (
        <Wrappr title="食事" id="meals" desc="寮母さん手作りの食事が授業日の朝と晩提供されます。バリエーションと栄養バランスに配慮された手作りの食事です。食事を食べる時間は任意で、食事の量の調節やアレルギー、好き嫌いなどにも対応しています。時々食事だけでなくお菓子も振る舞われます。">
            <section className="meals-section">
                <h2 className="contents-title">夕食例</h2>
                <div className="meals-container">
                    {dinnerdom}
                </div>
            </section>
            <section className="meals-section">
                <h2 className="contents-title">朝食例</h2>
                <div className="meals-container">
                    {breakfastdom}
                </div>
            </section>
            <section className="section-box">
                <div className="desc-plain">
                    <p>東北大学YMCA渓水寮では授業日の朝と晩に食事があります。</p>
                    <p>住み込みの寮母さん手作りの食事です。</p>
                    <p>食事を食べる時間は特に決まっておらず、アレルギーや好き嫌いにも対応していて、量の調節も行えます。</p>
                    {/*<p>時々寮母さん手作りのお菓子が振る舞われることもあります。</p>*/}
                    <p>ご飯を食べなかった時には食事代の返金があります。</p>
                </div>
            </section>
            <section className="section-box">
                <div className="meal-person-box person-box">
                    <img loading="lazy" width="400" height="300" className="person-img" src="/meals/ryobo.webp"
                        alt="食事を作ってくださる寮母さんの写真です" />
                    <div className="person-desc">
                        <p className="person-name">上島明子</p>
                        <p className="person-org">寮母</p>
                    </div>
                    <p className="message-text">
                        皆さんに喜んでもらえるような美味しくて栄養バランスの取れた、元気の出る食事作りを心がけています。
                    </p>
                </div>
            </section>
            <img loading="lazy" className="header-image" src="/meals/meal_pic.webp" alt="渓水寮の寮生が食事をしている写真" />

        </Wrappr>
    )
}