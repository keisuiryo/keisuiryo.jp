const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const contentRoot = path.join(process.cwd(), 'content')
const wikiRoot = path.join(contentRoot, 'wiki')

function parseArticle(file, category) {
  const raw = fs.readFileSync(file, 'utf8')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) throw new Error(`Missing JSON or YAML front matter: ${file}`)

  let metadata
  try {
    metadata = JSON.parse(match[1])
  } catch {
    try {
      metadata = yaml.load(match[1], { schema: yaml.JSON_SCHEMA })
    } catch (error) {
      throw new Error(`Invalid JSON or YAML front matter in ${file}: ${error.message}`)
    }
  }
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) {
    throw new Error(`JSON or YAML front matter must be an object: ${file}`)
  }

  return {
    ...metadata,
    category,
    source: path.relative(contentRoot, file),
    content: raw.slice(match[0].length)
  }
}

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) return markdownFiles(file)
    return entry.isFile() && entry.name.endsWith('.md') ? [file] : []
  })
}

function getWikiData() {
  const categories = fs.readdirSync(wikiRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const directory = path.join(wikiRoot, entry.name)
      const definition = JSON.parse(fs.readFileSync(path.join(directory, '_category.json'), 'utf8'))
      const pagesPath = path.join(directory, 'pages.json')
      const pages = fs.existsSync(pagesPath) ? JSON.parse(fs.readFileSync(pagesPath, 'utf8')) : []
      const articles = markdownFiles(directory)
        .map(file => parseArticle(file, definition.title))
      // Keep the folder as the source of truth: Markdown entries override
      // any stale copy of the same route in pages.json.
      const entriesByRoute = new Map(pages.map(page => [page.route, page]))
      for (const article of articles) entriesByRoute.set(article.route, article)
      const entries = [...entriesByRoute.values()]
        .sort((a, b) => (a.navigation?.order || 0) - (b.navigation?.order || 0) || (a.source || a.route).localeCompare(b.source || b.route))
      return {
        ...definition,
        entries,
        indexEntries: entries.filter(entry => entry.navigation?.show !== false)
      }
    })
    .sort((a, b) => a.order - b.order)

  const entries = categories.flatMap(category => category.entries)
  const routes = new Set()
  for (const entry of entries) {
    if (!entry.id || !entry.title || !entry.route) throw new Error(`Incomplete Wiki entry: ${entry.source || entry.title || 'pages.json entry'}`)
    if (routes.has(entry.route)) throw new Error(`Duplicate Wiki route: ${entry.route}`)
    routes.add(entry.route)
  }
  const articles = entries.filter(entry => entry.source)
  return { categories, articles }
}

module.exports = { getWikiData }
