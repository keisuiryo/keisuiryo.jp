import Link from 'next/link'
import Wrapper from '../../site/components/wrapper'
import MarkdownArticle from '../articles/MarkdownArticle'

export default function WikiHome({ home, articleLists, categoryAnchors }) {
  return (
    <Wrapper noheader id="wiki" title={home.title} desc={home.description}>
      <article className="wiki-article wiki-index" id="wiki-article-top">
        <nav className="wiki-breadcrumb" aria-label="パンくずリスト">
          <Link href="/">トップ</Link><span aria-hidden="true">›</span><span aria-current="page">渓水寮Wiki</span>
        </nav>
        <header className="wiki-article-heading">
          <h1>{home.title}</h1>
          {home.description && <p>{home.description}</p>}
        </header>
        <MarkdownArticle content={home.content} articleLists={articleLists} categoryAnchors={categoryAnchors} />
        <p className="wiki-back-to-top"><Link href="/">トップページへ</Link></p>
      </article>
    </Wrapper>
  )
}
