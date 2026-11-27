import Home from '../src/home/HomePage'
import { getWikiData } from '../src/wiki/data/loadWikiData'
import { getArticleSections } from '../src/wiki/data/articleSections'
import homeConfig from '../content/site/home.json'
import navigation from '../content/site/navigation.json'
import { getHeadings } from '../src/wiki/data/headings'

export async function getStaticProps() {
  const { articles, entries } = getWikiData()
  const source = articles.find(article => article.route === homeConfig.sectionsSource)
  if (!source) throw new Error(`Section source article not found: ${homeConfig.sectionsSource}`)
  const sections = getArticleSections(source, entries)

  // Navigation is curated independently; check that its internal section links exist.
  for (const item of navigation.items) {
    const [route, fragment] = item.href.split('#')
    const article = articles.find(entry => entry.route === route)
    if (fragment && (!article || !getHeadings(article.content).some(heading => heading.id === decodeURIComponent(fragment)))) {
      throw new Error(`Navigation section not found: ${item.href}`)
    }
  }
  return {
    props: {
      sections: sections.map(({ title, href, collection }) => ({
        title, href,
        articles: collection.items.slice(0, 2).map(({ id, title, route }) => ({ id, title, route }))
      }))
    }
  }
}

export default Home
