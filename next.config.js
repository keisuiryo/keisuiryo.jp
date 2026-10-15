/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export', 
  exportPathMap: async function () {
    
    return {
        '/': { page: '/' },
        '/about': { page: '/about' },
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
        '/404': { page: '/404' }, 
      }
  },
  trailingSlash: true,
  images: {
    loader: "custom"
  }
}
