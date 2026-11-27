import { getWikiData } from '../src/wiki/data/loadWikiData'
import { buildArticleCollections } from '../src/wiki/data/articleCollections'
import { buildBreadcrumbs } from '../src/wiki/data/breadcrumbs'
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
  const { articles, entries } = getWikiData()
  const article = articles.find(item => item.route === route)
  if (!article) return { notFound: true }

  const { content, ...metadata } = article

  const articleLists = buildArticleCollections(content, article.sourceDirectory, article.source, entries)
  const breadcrumbs = buildBreadcrumbs(article, entries)
  return { props: { ...metadata, content, articleLists, breadcrumbs } }
}
