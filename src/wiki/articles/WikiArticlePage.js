import Link from 'next/link'
import Wrapper from '../../site/components/wrapper'
import MarkdownArticle from './MarkdownArticle'

export default function WikiArticlePage({ route, title, metaTitle, description, category, categoryHref, content, author, affiliation, date, recordNote, related = [], articleLists = {} }) {
  return (
    <Wrapper noheader id={route.replace(/^\/+|\/+$/g, '')} title={metaTitle || title} desc={description} wikiCategory={category}>
      <article className="wiki-article" id="wiki-article-top">
        <nav className="wiki-breadcrumb" aria-label="パンくずリスト">
          <Link href="/">トップ</Link><span aria-hidden="true">›</span>
          <Link href="/wiki/">渓水寮Wiki</Link><span aria-hidden="true">›</span>
          {category && categoryHref && <><Link href={categoryHref}>{category}</Link><span aria-hidden="true">›</span></>}
          <span aria-current="page">{title}</span>
        </nav>
        <header className="wiki-article-heading">
          <p className="wiki-article-label">渓水寮Wiki{category ? ` ／ ${category}` : ''}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          {(author || affiliation || date) && <p className="wiki-article-author">{author && `執筆：${author}`}{author && affiliation && ' ／ '}{affiliation}{(author || affiliation) && date && ' ／ '}{date}</p>}
        </header>
        {recordNote && <p className="wiki-article-note">{recordNote}</p>}
        <MarkdownArticle content={content} articleLists={articleLists} />
        <nav className="wiki-related" aria-label="関連記事">
          <h2>関連するページ</h2>
          <ul>{related.map(item => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul>
        </nav>
        <p className="wiki-back-to-top"><Link href="/">トップページへ</Link><span aria-hidden="true"> / </span><a href="#wiki-article-top">記事の先頭へ ↑</a></p>
      </article>
    </Wrapper>
  )
}
