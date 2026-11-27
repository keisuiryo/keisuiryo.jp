import Link from 'next/link'
import Wrapper from '../components/wrapper'

const applicationForm = 'https://docs.google.com/forms/d/e/1FAIpQLSdWS2WnwcJzYkVQO4yTDaKNWCgiW9U0WMb_YFLsTHXNzIK7Og/formResponse'

export default function Home() {
    return (
        <Wrapper id="apply" title="募集要項" desc="東北地区学生YMCA 渓水寮は2027年4月入寮生を募集します。大学生・大学院生・研究生・通信制の学校に在籍する学生などが対象です。月額費用は53,000円です。">
            <div className="apply-main-container apply-page">
                <section className="apply-process" aria-labelledby="apply-process-title">
                    <p className="apply-kicker">2027 ENTRY</p>
                    <h2 className="apply-page-title" id="apply-process-title">入寮までの流れ</h2>
                    <p className="apply-intro">
                        2027年4月入寮生を募集します。対象は、寮での共同生活を共に送れる大学生・大学院生・研究生・通信制の学校に在籍する学生などで、東北大学の学生に限りません。
                    </p>
                    <dl className="apply-periods" aria-label="選考期間">
                        <div>
                            <dt>早期募集</dt>
                            <dd>2026年11月28日〜2027年2月8日</dd>
                        </div>
                        <div>
                            <dt>一般募集</dt>
                            <dd>2027年2月24日〜3月5日</dd>
                        </div>
                    </dl>
                    <p className="apply-period-note">申込み自体は期間外も可能です。見学・面接は各期間内に行います。</p>
                    <ol className="apply-steps">
                        <li className="apply-step">
                            <span className="apply-step-number" aria-hidden="true">01</span>
                            <div className="apply-step-content">
                                <h3>見学・相談</h3>
                                <p>渓水寮での生活についてご説明します。受験当日の見学や、直前の見学にも対応できます。見学・入寮を希望する方は、申込フォームをご記入のうえ、公式LINE（推奨）またはメールでご連絡ください。</p>
                                <div className="apply-contact-actions">
                                    <a className="apply-contact-primary" href={applicationForm}>申込フォーム <span aria-hidden="true">↗</span></a>
                                    <a href="https://lin.ee/6XMmw9l" target="_blank" rel="noopener noreferrer">公式LINE <span aria-hidden="true">↗</span></a>
                                    <a href="mailto:ryo@keisuiryo.jp">メールで問い合わせる <span aria-hidden="true">↗</span></a>
                                    <Link href="/faq/">よくある質問 <span aria-hidden="true">↗</span></Link>
                                </div>
                            </div>
                        </li>
                        <li className="apply-step">
                            <span className="apply-step-number" aria-hidden="true">02</span>
                            <div className="apply-step-content">
                                <h3>入寮申し込み</h3>
                                <p>応募用紙と面接用事前質問シートは、上記の窓口・郵送・見学時の手渡しで提出できます。</p>
                                <div className="files-box apply-files">
                                    <a href="/apply/渓水寮応募用紙.docx" className="file-link" download="渓水寮応募用紙.docx">応募用紙をダウンロード <span aria-hidden="true">↓</span></a>
                                    <a href="/apply/渓水寮質問シート.docx" className="file-link" download="渓水寮質問シート.docx">面接用事前質問シートをダウンロード <span aria-hidden="true">↓</span></a>
                                </div>
                            </div>
                        </li>
                        <li className="apply-step">
                            <span className="apply-step-number" aria-hidden="true">03</span>
                            <div className="apply-step-content">
                                <h3>面接</h3>
                                <p>在寮生が面接を行います。オンラインでの面接や、見学後その場での面接も可能です。</p>
                            </div>
                        </li>
                        <li className="apply-step">
                            <span className="apply-step-number" aria-hidden="true">04</span>
                            <div className="apply-step-content">
                                <h3>入寮</h3>
                                <p>大学在籍が確定した後、新入寮確認書を提出してください。確認書の提出をもって、入寮意思の確認とします。</p>
                                <div className="apply-contact-actions">
                                    <Link href="/new-resident-confirmation/">新入寮確認書を確認する <span aria-hidden="true">↗</span></Link>
                                </div>
                                <p>春から一緒に生活できるのを楽しみにしています。</p>
                            </div>
                        </li>
                    </ol>
                </section>
            </div>
        </Wrapper>
    )
}
