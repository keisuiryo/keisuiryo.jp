/** @type {import('next').NextConfig} */
module.exports = {
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
        '/messages': { page: '/messages' },
        '/compare': { page: '/compare' },
        '/404': { page: '/404' }, 
      }
  },
  trailingSlash: true,
  images: {
    loader: "custom"
  }
}