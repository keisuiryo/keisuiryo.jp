const fs = require('fs')
const path = require('path')
const { getHeadings } = require('./headings')

function normalizeRoute(route) {
  let value
  try { value = decodeURIComponent(route) } catch { throw new Error(`Invalid URL path: ${route}`) }
  return value === '/' ? '/' : `${value.replace(/\/+$/, '')}/`
}

// Next's fixed pages can be targets even if they have no pages.json registration.
function getStaticRoutes(directory = path.join(process.cwd(), 'pages'), prefix = '') {
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('_') || entry.name.startsWith('[')) return []
    if (entry.isDirectory()) return getStaticRoutes(path.join(directory, entry.name), `${prefix}/${entry.name}`)
    const match = entry.name.match(/^(.+)\.(?:js|jsx|ts|tsx)$/)
    if (!entry.isFile() || !match) return []
    return [normalizeRoute(match[1] === 'index' ? prefix || '/' : `${prefix}/${match[1]}`)]
  })
}

function buildBreadcrumbs(article, entries, { knownRoutes = [] } = {}) {
  const byRoute = new Map(entries.map(entry => [normalizeRoute(entry.route), entry]))
  const available = new Set([...byRoute.keys(), ...getStaticRoutes(), ...knownRoutes.map(normalizeRoute)])
  const crumbs = []
  const visited = new Set()

  function add(title, href) {
    if (!crumbs.some(crumb => crumb.href === href)) crumbs.push({ title, href })
  }

  function visit(entry) {
    const current = normalizeRoute(entry.route)
    if (visited.has(current)) throw new Error(`Circular parent relationship at ${entry.route}`)
    visited.add(current)
    const parent = entry.parent
    if (!parent) { visited.delete(current); return }
    if (typeof parent !== 'object' || Array.isArray(parent) || typeof parent.title !== 'string' || !parent.title.trim() || typeof parent.href !== 'string' || !parent.href.trim()) {
      throw new Error(`Invalid parent for ${entry.source || entry.route}: expected title and href`)
    }
    let url
    try { url = new URL(parent.href, 'https://internal.invalid') } catch { throw new Error(`Invalid parent URL: ${parent.href}`) }
    const internal = url.origin === 'https://internal.invalid'
    if (internal && !parent.href.startsWith('/')) throw new Error(`Parent URL must be an absolute path: ${parent.href}`)
    if (internal) {
      const targetRoute = normalizeRoute(url.pathname)
      if (!available.has(targetRoute)) throw new Error(`Parent URL not found: ${parent.href} (${entry.source || entry.route})`)
      const target = byRoute.get(targetRoute)
      if (target) {
        visit(target)
        if (url.hash && target.content != null) {
          let fragment
          try { fragment = decodeURIComponent(url.hash.slice(1)) } catch { throw new Error(`Invalid parent fragment: ${parent.href}`) }
          if (!getHeadings(target.content).some(heading => heading.id === fragment)) {
            throw new Error(`Parent heading not found: ${parent.href} (${entry.source || entry.route})`)
          }
          // A section belongs to its page; include that page before the section.
          add(target.title, target.route)
        }
      }
    }
    add(parent.title, parent.href)
    visited.delete(current)
  }

  visit(article)
  return crumbs
}

module.exports = { buildBreadcrumbs, getStaticRoutes, normalizeRoute }
