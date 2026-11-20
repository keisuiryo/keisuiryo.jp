import { getWikiData } from '../src/wiki/loadWikiData'
export { default } from '../src/wiki/WikiHomePage'

export async function getStaticProps() {
  const { categories } = getWikiData()
  return {
    props: {
      categories: categories.map(({ title, order, indexEntries }) => ({
        title,
        order,
        indexEntries: indexEntries.map(({ id, title, route, description }) => ({
          id,
          title,
          route,
          ...(description ? { description } : {})
        }))
      }))
    }
  }
}
