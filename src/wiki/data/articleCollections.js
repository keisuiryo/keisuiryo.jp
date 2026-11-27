import path from 'path'

const directivePattern = /^\s*\{\{(list|article-list):([^}]+)\}\}\s*$/gm

function parseDirective(directive) {
  const match = directive.match(/^\s*\{\{(list|article-list):([^}]+)\}\}\s*$/)
  if (!match) throw new Error(`Invalid article list directive: ${directive}`)
  const [, kind, expression] = match
  const [selectorPart, ...options] = expression.split(';')
  const selector = selectorPart.trim() || '.'
  const settings = Object.fromEntries(options.map(option => {
    const separator = option.indexOf('=')
    if (separator < 0) return [option.trim(), 'true']
    return [option.slice(0, separator).trim(), option.slice(separator + 1).trim()]
  }))

  const view = settings.view || (kind === 'article-list' ? 'cards' : 'list')
  if (!['list', 'cards'].includes(view)) throw new Error(`Unsupported list view "${view}" in ${directive.trim()}`)

  let limit = settings.limit || 'all'
  if (limit !== 'all') {
    limit = Number(limit)
    if (!Number.isInteger(limit) || limit < 1) throw new Error(`List limit must be a positive integer or "all" in ${directive.trim()}`)
  }

  return {
    key: directive.trim(),
    selector,
    view,
    limit,
    expandable: settings.expand === 'button'
  }
}

function getListRequests(content) {
  return [...content.matchAll(directivePattern)].map(match => parseDirective(match[0]))
}

function buildArticleCollections(content, baseDirectory, currentSource, entries, { respectNavigationVisibility = false } = {}) {
  const collections = {}
  const base = baseDirectory || '.'

  for (const request of getListRequests(content)) {
    const targetDirectory = path.posix.normalize(path.posix.join(base, request.selector))
    if (targetDirectory === '..' || targetDirectory.startsWith('../') || path.posix.isAbsolute(targetDirectory)) {
      throw new Error(`List path must stay inside content/wiki: ${request.key}`)
    }

    const items = entries
      .filter(entry => entry.sourceDirectory === targetDirectory && entry.source !== currentSource)
      .filter(entry => !respectNavigationVisibility || entry.navigation?.show !== false)
      .sort((a, b) => (a.navigation?.order || 0) - (b.navigation?.order || 0) || (a.source || a.route).localeCompare(b.source || b.route))
      .map(({ id, title, route, author, affiliation, description }) => ({
        id, title, route, author: author || null, affiliation: affiliation || null,
        description: description || null
      }))

    collections[request.key] = { items, view: request.view, limit: request.limit, expandable: request.expandable }
  }

  return collections
}

export { buildArticleCollections, getListRequests }
