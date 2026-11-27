import { getWikiData } from '../src/wiki/data/loadWikiData'
import { buildArticleCollections } from '../src/wiki/data/articleCollections'
import WikiArticlePage from '../src/wiki/articles/WikiArticlePage'

export default function WikiArticleRoute(props) {
  return <WikiArticlePage {...props} />
}

export async function getStaticPaths() {
  const { articles } = getWikiData()
  return {
    paths: articles.map(article => ({ params: { slug: article.route.split('/').filter(Boolean) } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const route = `/${params.slug.join('/')}/`
  const { articles, categories, entries } = getWikiData()
  const article = articles.find(item => item.route === route)
  if (!article) return { notFound: true }

  const content = article.content
  delete article.content

  const articleLists = buildArticleCollections(content, article.sourceDirectory, article.source, entries)

  const category = categories.find(item => item.title === article.category)
  const categoryHref = category ? `/wiki/#wiki-category-${category.order}` : null

  return { props: { ...article, content, articleLists, categoryHref } }
}
