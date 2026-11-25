import Link from 'next/link'

export default function ArticleCards({ articles = [] }) {
  return (
    <div className="messages-archive-grid">
      {articles.map(article => (
        <Link href={article.route} className="messages-archive-card" key={article.id}>
          <h3>{article.title}</h3>
          {(article.author || article.affiliation) && <p>{[article.author, article.affiliation].filter(Boolean).join('・')}</p>}
          {article.description && <p className="messages-archive-excerpt">{article.description}</p>}
          <span>記事を読む →</span>
        </Link>
      ))}
    </div>
  )
}
