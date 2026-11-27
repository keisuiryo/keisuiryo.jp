import Link from 'next/link'
import Wrapper from '../../site/components/wrapper'
import MarkdownArticle from './MarkdownArticle'

export default function WikiArticlePage({ route, title, metaTitle, description, content, author, affiliation, date, recordNote, related = [], articleLists = {}, breadcrumbs = [] }) {
  return (
    <Wrapper noheader id={route.replace(/^\/+|\/+$/g, '')} title={metaTitle || title} desc={description} breadcrumbs={breadcrumbs}>
      <article className="wiki-article" id="wiki-article-top">
        <nav className="wiki-breadcrumb" aria-label="パンくずリスト">
          <Link href="/">トップ</Link><span aria-hidden="true">›</span>
          {breadcrumbs.filter(item => item.href !== '/').map((item, index) => <span key={`${item.href}-${index}`}><Link href={item.href}>{item.title}</Link><span aria-hidden="true"> › </span></span>)}
          <span aria-current="page">{title}</span>
        </nav>
        <header className="wiki-article-heading">
          {breadcrumbs.length > 0 && <p className="wiki-article-label">{breadcrumbs.map(item => item.title).join(' ／ ')}</p>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {(author || affiliation || date) && <p className="wiki-article-author">{author && `執筆：${author}`}{author && affiliation && ' ／ '}{affiliation}{(author || affiliation) && date && ' ／ '}{date}</p>}
        </header>
        {recordNote && <p className="wiki-article-note">{recordNote}</p>}
        <MarkdownArticle content={content} articleLists={articleLists} />
        {related.length > 0 && <nav className="wiki-related" aria-label="関連記事">
          <h2>関連するページ</h2>
          <ul>{related.map(item => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul>
        </nav>}
        <p className="wiki-back-to-top"><Link href="/">トップページへ</Link><span aria-hidden="true"> / </span><a href="#wiki-article-top">記事の先頭へ ↑</a></p>
      </article>
    </Wrapper>
  )
}
