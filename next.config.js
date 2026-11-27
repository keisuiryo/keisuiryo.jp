/** @type {import('next').NextConfig} */
const { getWikiData } = require('./src/wiki/data/loadWikiData')

module.exports = {
  output: 'export', 
  exportPathMap: async function (defaultPathMap, { dev }) {
    if (dev) return defaultPathMap
    const { articles } = getWikiData()
    
    return {
        '/': { page: '/' },
        '/facilities': { page: '/facilities'},
        '/location': { page: '/location' },
        '/apply': { page: '/apply' },
        ...articles.reduce((routes, article) => {
          const route = article.route.replace(/\/$/, '')
          routes[route] = {
            page: '/[...slug]',
            query: { slug: route.split('/').filter(Boolean) }
          }
          return routes
        }, {}),
        '/404': { page: '/404' }, 
      }
  },
  trailingSlash: true,
  images: {
    loader: "custom"
  }
}
