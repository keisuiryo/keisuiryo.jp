import { getWikiData } from '../src/wiki/data/loadWikiData'
import { buildArticleCollections } from '../src/wiki/data/articleCollections'
export { default } from '../src/wiki/navigation/WikiHomePage'

export async function getStaticProps() {
  const { home, entries, categories } = getWikiData()
  if (!home) throw new Error('Missing Wiki homepage: content/wiki/homepage.md')
  return {
    props: {
      home: {
        title: home.title,
        description: home.description || '',
        content: home.content
      },
      categoryAnchors: Object.fromEntries(categories.map(({ title, order }) => [title, `wiki-category-${order}`])),
      articleLists: buildArticleCollections(home.content, home.sourceDirectory, home.source, entries, { respectNavigationVisibility: true })
    }
  }
}
