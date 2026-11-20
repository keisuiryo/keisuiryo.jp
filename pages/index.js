import Home from '../src/home/HomePage'
import { getWikiData } from '../src/wiki/loadWikiData'

export async function getStaticProps() {
  const { categories } = getWikiData()
  return {
    props: {
      wikiCategories: categories.map(({ title, order, indexEntries }) => ({
        title,
        order,
        articles: indexEntries.slice(0, 2).map(({ id, title: articleTitle, route }) => ({
          id,
          title: articleTitle,
          route
        }))
      }))
    }
  }
}

export default Home
