import { getWikiData } from '../src/wiki/loadWikiData'
import WikiArticlePage from '../src/wiki/components/WikiArticlePage'

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
  const { articles } = getWikiData()
  const article = articles.find(item => item.route === route)
  if (!article) return { notFound: true }

  let content = article.content
  delete article.content
  if (article.stripFirstHeading) content = content.replace(/^\s*# [^\r\n]+\r?\n/, '')
  for (const replacement of article.linkReplacements || []) {
    content = content.split(replacement.from).join(replacement.to)
  }

  return { props: { ...article, content } }
}
