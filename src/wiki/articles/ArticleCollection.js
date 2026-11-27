import { useState } from 'react'
import Link from 'next/link'

function ArticleCard({ article }) {
  return (
    <Link href={article.route} className="messages-archive-card" key={article.id}>
      <h3>{article.title}</h3>
      {(article.author || article.affiliation) && <p>{[article.author, article.affiliation].filter(Boolean).join('・')}</p>}
      {article.description && <p className="messages-archive-excerpt">{article.description}</p>}
      <span>記事を読む →</span>
    </Link>
  )
}

export default function ArticleCollection({ collection = {} }) {
  const { items = [], view = 'list', limit = 'all', expandable = false } = collection
  const [expanded, setExpanded] = useState(false)
  const capped = limit !== 'all' && items.length > limit
  const visibleItems = capped && !expanded ? items.slice(0, limit) : items

  if (items.length === 0) return null

  return (
    <div className={`wiki-collection wiki-collection-${view}`}>
      {view === 'cards' ? (
        <div className="messages-archive-grid">
          {visibleItems.map(article => <ArticleCard article={article} key={article.id} />)}
        </div>
      ) : (
        <ul className="wiki-article-list">
          {visibleItems.map(article => (
            <li key={article.id}>
              <Link href={article.route}>{article.title} <span aria-hidden="true">→</span></Link>
              {article.description && <p>{article.description}</p>}
            </li>
          ))}
        </ul>
      )}
      {expandable && capped && (
        <button
          className="wiki-collection-toggle"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(value => !value)}
        >
          {expanded ? '閉じる −' : `もっと見る（残り${items.length - limit}件）＋`}
        </button>
      )}
    </div>
  )
}
