import { buildArticleCollections } from './articleCollections'
import { getHeadings, getMarkdownLines } from './headings'

// A section is a heading immediately followed (apart from blank lines) by a list.
// This works for any article and uses the same collection rules as its page.
function getArticleSections(article, entries) {
  const lines = getMarkdownLines(article.content)
  const collections = buildArticleCollections(article.content, article.sourceDirectory, article.source, entries)
  return getHeadings(article.content).flatMap(heading => {
    let index = heading.index + 1
    while (index < lines.length && !lines[index].trim()) index += 1
    const directive = (lines[index] || '').trim()
    const collection = collections[directive]
    if (!collection) return []
    return [{
      title: heading.text,
      href: `${article.route}#${heading.id}`,
      collection
    }]
  })
}

export { getArticleSections }
