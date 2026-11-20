/** @type {import('next').NextConfig} */
const { getWikiData } = require('./src/wiki/loadWikiData')

module.exports = {
  output: 'export', 
  exportPathMap: async function (defaultPathMap, { dev }) {
    if (dev) return defaultPathMap
    const { articles } = getWikiData()
    
    return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/wiki': { page: '/wiki' },
        '/facilities': { page: '/facilities'},
        '/location': { page: '/location' },
        '/apply': { page: '/apply' },
        '/events': { page: '/events'},
        '/faq': { page: '/faq' },
        '/meals': { page: '/meals' },
        '/life': { page: '/life' },
        '/messages': { page: '/messages' },
        '/messages/yamaguchi': { page: '/messages/yamaguchi' },
        '/messages/wakayama': { page: '/messages/wakayama' },
        '/messages/shiro': { page: '/messages/shiro' },
        '/messages/nuts': { page: '/messages/nuts' },
        '/messages/denzo': { page: '/messages/denzo' },
        '/messages/supika': { page: '/messages/supika' },
        '/compare': { page: '/compare' },
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
