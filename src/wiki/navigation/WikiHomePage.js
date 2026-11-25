import Link from 'next/link'
import Wrapper from '../../site/components/wrapper'

export default function WikiHome({ categories }) {
  return (
    <Wrapper noheader id="wiki" title="渓水寮Wiki" desc="渓水寮の理念や暮らしについての記事を紹介します。">
      <div className="wiki-article wiki-index">
        <nav className="wiki-breadcrumb" aria-label="パンくずリスト">
          <Link href="/">トップ</Link><span aria-hidden="true">›</span><span aria-current="page">渓水寮Wiki</span>
        </nav>
        <header className="wiki-article-heading">
          <h1>渓水寮Wiki</h1>
          <p>渓水寮の理念や暮らしについて、記事を紹介します。</p>
        </header>
        {categories.map(category => (
          <section className="wiki-index-section" id={`wiki-category-${category.order}`} key={category.title}>
            <h2>{category.title}</h2>
            <ul>
              {category.indexEntries.map(article => (
                <li key={article.id}>
                  <Link href={article.route}>{article.title} <span aria-hidden="true">→</span></Link>
                  {article.description && <p>{article.description}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="wiki-back-to-top"><Link href="/">トップページへ</Link></p>
      </div>
    </Wrapper>
  )
}
