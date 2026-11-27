const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { buildBreadcrumbs } = require('./breadcrumbs')

const contentRoot = path.join(process.cwd(), 'content')
const wikiRoot = path.join(contentRoot, 'wiki')

function sourceDirectory(file) {
  return path.relative(wikiRoot, path.dirname(file)).split(path.sep).join('/') || '.'
}

function parseArticle(file) {
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
    source: path.relative(contentRoot, file),
    sourceDirectory: sourceDirectory(file),
    content: raw.slice(match[0].length)
  }
}

// Markdown and page registrations are collected with identical rules at every depth.
function collectContent(directory, articles, pages) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      collectContent(file, articles, pages)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      articles.push(parseArticle(file))
    } else if (entry.isFile() && entry.name === 'pages.json') {
      const definitions = JSON.parse(fs.readFileSync(file, 'utf8'))
      if (!Array.isArray(definitions)) throw new Error(`Page registrations must be an array: ${file}`)
      pages.push(...definitions.map(page => ({ ...page, sourceDirectory: sourceDirectory(file) })))
    }
  }
}

function getWikiData() {
  const articles = []
  const pages = []
  collectContent(wikiRoot, articles, pages)
  const entriesByRoute = new Map()
  for (const page of pages) {
    if (!page.id || !page.title || !page.route) throw new Error(`Incomplete Wiki entry: ${page.title || 'pages.json entry'}`)
    if (entriesByRoute.has(page.route)) throw new Error(`Duplicate Wiki route: ${page.route}`)
    entriesByRoute.set(page.route, page)
  }
  const articleRoutes = new Set()
  for (const article of articles) {
    if (!article.id || !article.title || !article.route) throw new Error(`Incomplete Wiki entry: ${article.source}`)
    if (articleRoutes.has(article.route)) throw new Error(`Duplicate Wiki route: ${article.route}`)
    articleRoutes.add(article.route)
    // A Markdown article takes precedence over an outdated pages.json registration.
    entriesByRoute.set(article.route, article)
  }
  const entries = [...entriesByRoute.values()]
    .sort((a, b) => (a.navigation?.order || 0) - (b.navigation?.order || 0) || (a.source || a.route).localeCompare(b.source || b.route))

  // Validate each parent chain, including parents of registered non-Markdown pages.
  for (const entry of entries) buildBreadcrumbs(entry, entries)
  return { entries, articles }
}

module.exports = { getWikiData }
