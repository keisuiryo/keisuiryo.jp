import { getWikiData } from '../src/wiki/data/loadWikiData'
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
  const { articles, categories } = getWikiData()
  const article = articles.find(item => item.route === route)
  if (!article) return { notFound: true }

  let content = article.content
  delete article.content
  if (article.stripFirstHeading) content = content.replace(/^\s*# [^\r\n]+\r?\n/, '')
  for (const replacement of article.linkReplacements || []) {
    content = content.split(replacement.from).join(replacement.to)
  }

  const voices = article.voiceIndex ? articles
    .filter(item => item.route.startsWith('/messages/') && item.route !== route)
    .sort((a, b) => (a.listOrder || 0) - (b.listOrder || 0))
    .map(({ id, title, route, author, affiliation, listDescription, collection }) => ({
      id, title, route, author: author || null, affiliation: affiliation || null,
      listDescription: listDescription || null, collection: collection || null
    })) : []

  const category = categories.find(item => item.title === article.category)
  const categoryHref = category ? `/wiki/#wiki-category-${category.order}` : null

  return { props: { ...article, content, voices, categoryHref } }
}
