import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper id="apply" title="募集要項" desc="東北大学YMCA渓水寮は東北大学に通う男子・女子の新入寮生を募集しています。お気軽に寮までご連絡ください。">
            <div className="apply-main-container">
                {/*<!--<h2 className="contents-title">はじめに</h2>
                <div className="desc-plain">
                    <p>東北大学YMCA渓水寮に興味を持っていただきありがとうございます。</p>
                    <p>渓水寮では仙台市の大学に通う大学生・大学院生を受け入れています。</p>
                    <p> クリスチャンかどうかに関わらず入寮できますし、中途入寮や３年次編入・大学院からの入寮も受け付けております。</p>-->
            <!--<p>質問や見学の申し込み等ありましたらお気軽にご質問ください。</p>
            <p>なお、Twitterにも生活の様子をのせています。よろしければどうぞ。</p>
            <a href="https://twitter.com/keisuiryo" className="btn-fab btn">Twitter →</a>-->
    <!--</div>-->*/}
                <div className="important">
                    <h3><span>i</span>申込のご案内</h3>
                    <p>渓水寮は皆様からの見学を受け付けております。</p>
                    <p>以下の申し込みフォームをご記入の上、公式LINE(推奨)もしくはメールでご一報ください。<a href="https://docs.google.com/forms/d/e/1FAIpQLSdWS2WnwcJzYkVQO4yTDaKNWCgiW9U0WMb_YFLsTHXNzIK7Og/formResponse" className="link contents-link">申し込みフォーム</a></p>
                    <p>寮生一同お待ちしております。</p>
                    {/*<p>2024年度の入寮申込は終了いたしました。たくさんのご応募、本当にありがとうございました。</p>*/}
                </div>
                    {/*<p className="important-warning">2月15日現在、ありがたいことに定員を上回る募集をいただいており、早期に募集を締め切る可能性があります。よろしくお願いいたします。</p>
                    <table>
                    <tr>
                        <td>連絡〆切</td>
                        <td>3/1(金)</td>
                    </tr>
                    <tr>
                        <td>見学・面接可能最終日</td>
                        <td>3/9(木)</td>
                    </tr>
                    <tr>
                        <td>入寮可否通知</td>
                        <td>3/10(金)</td>
                    s</tr></table>
                </div>*/}
                
                {/*<div className="important">

                    <h3><span>i</span>令和6年度募集要項<br />(3/10現在)</h3>*/}
                    {/*<h2 className="contents-title">令和6年度募集要項(3/20現在)</h2>
                    <p>
                        入寮時期:2024年4月<br />
                        {/*対象:仙台市近郊の大学・専門学校に通う学部新入生<br />
                        募集人数:3名(残り1名)<br />
                        選抜方法:面接による<br />
                        入寮期間:最長3年(2024/4~2027/3)<br />
                        見学・面接日程:連絡により調整<br />
                        定員が充足し次第募集を締め切らせていただきます。よろしくお願いします。
                </p>*/}
                    {/*
                    <table>
                    <tr>
                        <td>連絡〆切</td>
                        <td>3/20(日)</td>
                    </tr>
                    <tr>
                        <td>見学・面接可能最終日</td>
                        <td>3/21(火)</td>
                    </tr>
                    <tr>
                        <td>入寮可否通知</td>
                        <td>3/22(水)</td>
                    </tr>
            </table>*/}
                {/*</div>*/}
                <h2 className="contents-title">連絡先</h2>

                <p className="contents-desc">質問・見学申し込みなどありましたら公式LINE(推奨)もしくはメールでご連絡ください。<br /><a className='link' href="https://keisuiryo.studio.site/faq">よくある質問</a>もご覧ください。</p>
                <div className="link-box">
                    <a href="https://lin.ee/6XMmw9l"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                        alt="友だち追加" height="36" border="0" /></a>
                    <a className="link icon-text" href="mailto:ryo@keisuiryo.jp"><svg className="link-icon">
                        <use href="#svg-email" />
                    </svg>ryo@keisuiryo.jp</a>
                    {/*<a className="link icon-text" href="tel:+810222493564"><svg className="link-icon">
                        <use href="#svg-tel" />
                    </svg>022-249-3564</a>*/}
                </div>
                {/*<h2 className="contents-title">令和6年度募集要項</h2>
                <p>
                    入寮時期:2024年4月<br />
                    対象:仙台市近郊の大学・専門学校に通う見込みの学生<br />
                    募集人数:2~4名<br />
                    選抜方法:面接による<br />
                    日程:質問・見学受付中
                </p>*/}
                <h2 className="contents-title apply-contents-title">入寮の流れ</h2>
                <div className="flaw-box">
                    <h4 className="flaw-title"><span className="flaw-num">1</span>見学</h4>
                    <p className="flaw-text">渓水寮での生活についてご説明します。受験当日の見学・直前の見学の連絡にも対応できます。以下のフォームをご記入の上、公式LINE(推奨)もしくはメールで申し込みください。
                        <br />
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWS2WnwcJzYkVQO4yTDaKNWCgiW9U0WMb_YFLsTHXNzIK7Og/formResponse" className="link contents-link">申し込みフォーム</a>
                        よろしくお願いします。</p>
                    <h4 className="flaw-title"><span className="flaw-num">2</span>入寮申し込み</h4>
                    <p className="flaw-text">申し込み用紙・面接用事前質問シートを公式LINE・メールもしくは郵送で送ってください。見学の際に手渡しでも大丈夫です。</p>
                    <div className="files-box">
                        {/*<!--<a href="/apply/assets/渓水寮応募用紙.pdf" className="icon-text file-link" download="渓水寮応募用紙.pdf"><svg
                            className="link-icon">
                            <use href="#svg-pdf" />
    </svg>応募用紙</a>-->*/}
                        <a href="/apply/渓水寮応募用紙.docx" className="icon-text file-link" download="渓水寮応募用紙.docx"><svg
                            className="link-icon">
                            <use href="#svg-docx" />
                        </svg>応募用紙</a>
                        {/*<!--<a href="/apply/assets/渓水寮質問シート.pdf" className="icon-text file-link" download="渓水寮質問シート.pdf"><svg
                            className="link-icon">
                            <use href="#svg-pdf" />
</svg>質問シート</a>-->*/}
                        <a href="/apply/渓水寮質問シート.docx" className="icon-text file-link" download="渓水寮質問シート.docx"><svg
                            className="link-icon">
                            <use href="#svg-docx" />
                        </svg>質問シート</a>
                    </div>
                    <h4 className="flaw-title"><span className="flaw-num">3</span>面接</h4>
                    <p className="flaw-text">
                        在寮生が面接を行います。オンラインでの面接や見学後その場で面接を行うこともできます。
                    </p>
                    <h4 className="flaw-title"><span className="flaw-num">4</span>入寮</h4>
                    <p className="flaw-text">春から一緒に生活できるのを楽しみにしています。
                    </p>
                </div>
                <h2 className="contents-title apply-contents-title">アクセス</h2>
                <p className="contents-desc">
                    地下鉄『仙台駅』４番線より東西線に乗り終点『八木山動物公園』で下車。<br />市バス『八木山動物公園駅』３番のりばより、４５系統・７０５系統「緑ヶ丘三丁目」行き、<br />または４０系統「緑ヶ丘三丁目・長町駅東口・市立病院」行きに乗車。<br />『青葉苑団地前』停留所で降車後、徒歩４０秒、ローソン右隣の建物です。
                </p>
                {/*<!--<h2 className="contents-title">募集要項</h2>
            <p>対象:仙台市の大学に通う大学生<br>
                募集人数:3名<br>
                選抜方法:面接による<br>
                日程:AO2、AO3、前・後期入寮受付中です
            </p>-->*/}
            </div>
        </Wrapper>
    )
}
