import Stack from './modules/stack'
import Wrapper from './modules/wrapper'
import Link from 'next/link'

export default function Home() {
    return (
        <Wrapper title="UH・学寮などとの比較" id="compare" desc="東北大学YMCA渓水寮と、東北大学が運営するユニバーシティ・ハウス、学生寮などを比較します。">
            <div className='compare-catch-box'><p className='compare-catch'>大学よりも長く</p><p className='compare-catch'>過ごす場所だから</p><br/>
            <p className='compare-catch'>ていねいに選びたい</p>
            <p></p>
            </div>
            <div className='compare-box'>
                <h3 className='compare-title'><span className="material-symbols-rounded compare-icon">
                    event_note
                </span>入居年数</h3>
                <h4 className='compare-name'>学生寮(東北大学運営)</h4>
                <p className='compare-text'>4~6年</p>
                <h4 className='compare-name'>ユニバーシティ・ハウス</h4>
                <p className='compare-text'>基本2年</p>
                <h4 className='compare-name'>渓水寮</h4>
                <p className='compare-text'>4~6年</p>
                <h4 className='compare-name'>出典</h4>
                <p className='compare-text'>東北大学(2022),学寮<Link href="https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0502/"><a className='compare-link'>https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0502/</a></Link></p>
                <p className='compare-text'>東北大学(2022),ユニバーシティ・ハウス<Link href="https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0501/"><a className='compare-link'>https://www.tohoku.ac.jp/japanese/studentinfo/studentlife/05/studentlife0501/</a></Link></p>
            </div>
            <div className='compare-box'>
                <h3 className='compare-title'><span className="material-symbols-rounded compare-icon">
                    currency_yen
                </span>費用</h3>
                <h4 className='compare-name'>学生寮(東北大学運営)</h4>
                <p className='compare-text'>寮費　　4300円(日就寮は700円)<br />
                    水光熱費を含めて10000~20000円程度<br />
                    ほかに食費・交通費がかかります</p>
                <h4 className='compare-name'>ユニバーシティ・ハウス</h4>
                <p className='compare-text'>寄宿料　21600~28000円/月(施設により異なる)<br />
                    共益費　1500~3500円/月<br />
                    水光熱費込みで30000~45000円程度<br />
                    ほかに水光熱費・食費・交通費がかかります</p>
                <h4 className='compare-name'>渓水寮</h4>
                <p className='compare-text'>寮費　47000円/月(授業日朝晩の食費・共益費・水光熱費込み)<br />他に土日・昼食の食費・交通費がかかります</p>
                <h4 className='compare-name'>出典</h4>
                <p className='compare-text'>東北大学(2022),R4年度_進学説明会スライド資料,<br /><Link href="https://c.bureau.tohoku.ac.jp/wp-content/uploads/2022/07/R4%E5%B9%B4%E5%BA%A6_%E9%80%B2%E5%AD%A6%E8%AA%AC%E6%98%8E%E4%BC%9A%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E8%B3%87%E6%96%99%EF%BC%88HP%E6%8E%B2%E8%BC%89%E7%94%A8%EF%BC%89.pdf"><a className='compare-link'>https://c.bureau.tohoku.ac.jp/wp-content/uploads/2022/07/R4年度_進学説明会スライド資料（HP掲載用）.pdf</a></Link>
                松風寮(2017),FAQ(よくある質問)<Link href="https://mazkaze.jimdofree.com/東北大学松風寮ホームページ/faq-よくある質問/"><a className='compare-link'>https://mazkaze.jimdofree.com/東北大学松風寮ホームページ/faq-よくある質問/</a></Link>
                霽風寮,寮生活<Link href="http://www.say-who.net/life.html"><a className='compare-link'>http://www.say-who.net/life.html</a></Link></p>
                明善寮(2022),居室(写真)・寮費<Link href="https://meizenryoh210.wixsite.com/meizendormitory/居室-寮費"><a className='compare-link'>https://meizenryoh210.wixsite.com/meizendormitory/居室-寮費</a></Link>
            </div>
            <div className='compare-box'>
                <h3 className='compare-title'><span className="material-symbols-rounded compare-icon">
                    diversity_3
                </span>雰囲気</h3>
                <h4 className='compare-name'>学生寮(東北大学運営)</h4>
                <p className='compare-text'>学生寮・生活班により大きく異なります(仲の良いところからアパートのようなところまで)<br />
                </p>
                <h4 className='compare-name'>ユニバーシティ・ハウス</h4>
                <p className='compare-text'>ユニットにより大きく異なります(仲の良いところからアパートのようなところまで)</p>
                <h4 className='compare-name'>渓水寮</h4>
                <p className='compare-text'>アットホームです</p>
                <h4 className='compare-name'>出典</h4>
                <p className='compare-text'>
                東北大学まとめwiki(非公式)(2021),寮はいかがでしょうか？<Link href="https://wikiwiki.jp/tonpei/寮はいかがでしょうか？"><a className='compare-link'>https://wikiwiki.jp/tonpei/寮はいかがでしょうか？</a></Link>
                UH青葉山アドバイザーブログ(準公式)(2022),入居検討中の皆様へ<Link href="https://aobayama-uh.hatenablog.com/entry/2021/02/04/180909"><a className='compare-link'>https://aobayama-uh.hatenablog.com/entry/2021/02/04/180909</a></Link>
                東北大学(2022),よくあるご質問(FAQ)<Link href="https://c.bureau.tohoku.ac.jp/gakusei-shien/kisyukusya/page-26734/"><a className='compare-link'>https://c.bureau.tohoku.ac.jp/gakusei-shien/kisyukusya/page-26734/</a></Link>
                東北大学理学部(2022),生活に関する相談会FAQ<Link href="https://www.sci.tohoku.ac.jp/oc/faq.php"><a className='compare-link'>https://www.sci.tohoku.ac.jp/oc/faq.php</a></Link></p>
                <h4 className='compare-name'><span className="material-symbols-rounded">
face
</span>寮生の声</h4>
<p className='compare-text'>・学寮・UHは良くも悪くも、ユニット・生活班によって雰囲気が全然違うと聞きます<br/>・学生マンションは、学生同士の交流はないとよく聞きます(普通のアパートと一緒)</p>
            </div>
            <div className='compare-box'>
                <h3 className='compare-title'><span className="material-symbols-rounded compare-icon">
                    apartment
                </span>設備</h3>
                <p className='compare-text'>\人により重視する点が違うと思いますので建物の様子が紹介されているリンクを紹介いたします。</p>
                <h4 className='compare-name'>学生寮(東北大学運営)</h4>
                <p className='compare-text'>東北大学(2022),学寮ギャラリー<Link href="https://c.bureau.tohoku.ac.jp/gakusei-shien/kisyukusya/photo-gakuryo/"><a className='compare-link'>https://c.bureau.tohoku.ac.jp/gakusei-shien/kisyukusya/photo-gakuryo/</a></Link>
                </p>
                <h4 className='compare-name'>ユニバーシティ・ハウス</h4>
                <p className='compare-text'>東北大学(2022),学生寄宿舎<Link href="https://c.bureau.tohoku.ac.jp/gakusei-shien/kisyukusya/"><a className='compare-link'>https://c.bureau.tohoku.ac.jp/gakusei-shien/kisyukusya/</a></Link></p>
                <h4 className='compare-name'>渓水寮</h4>
                <p className='compare-text'><Link href="https://keisuiryo.jp/facilities/"><a className='compare-link'>https://keisuiryo.jp/facilities/</a></Link></p>
            </div>
        </Wrapper>
    )
}