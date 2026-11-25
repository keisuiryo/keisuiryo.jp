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

  const content = article.content
  delete article.content

  const listGroups = [...content.matchAll(/\{\{article-list:([^}]+)\}\}/g)].map(([, group]) => group.trim())
  const articleDirectory = article.source?.split('/').slice(0, -1).join('/')
  const articleLists = Object.fromEntries(listGroups.map(group => [group, articles
    .filter(item => item.source?.startsWith(`${articleDirectory}/${group}/`))
    .sort((a, b) => (a.navigation?.order || 0) - (b.navigation?.order || 0) || a.source.localeCompare(b.source))
    .map(({ id, title, route, author, affiliation, description }) => ({
      id, title, route, author: author || null, affiliation: affiliation || null,
      description: description || null
    }))]))

  const category = categories.find(item => item.title === article.category)
  const categoryHref = category ? `/wiki/#wiki-category-${category.order}` : null

  return { props: { ...article, content, articleLists, categoryHref } }
}
