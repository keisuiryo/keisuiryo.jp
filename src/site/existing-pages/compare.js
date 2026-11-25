import Head from 'next/head'
import Link from 'next/link'
import Wrapper from '../components/wrapper'

export default function CompareArchiveNotice() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <Wrapper
        title="UH・学寮などとの比較（アーカイブ）"
        id="compare"
        desc="旧比較ページは非公開です。最新の住まいと生活費の比較をご覧ください。"
      >
        <section className="compare-archive" aria-labelledby="compare-archive-title">
          <div className="compare-archive-panel">
            <p className="compare-archive-kicker">ARCHIVED PAGE / 2026.11.21</p>
            <h2 id="compare-archive-title">この比較ページは非公開です</h2>
            <p>
              「UH・学寮などとの比較」は、情報更新のため2026年11月21日をもって公開を終了し、アーカイブしました。
            </p>
            <p>
              現在の住まいと生活費の比較は、更新したページをご覧ください。
            </p>
            <Link className="compare-archive-link" href="/living-cost-comparison/">
              住まいと生活費の比較を見る <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
