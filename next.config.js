/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export', 
  exportPathMap: async function () {
    
    return {
        '/': { page: '/' },
        '/404': { page: '/404' },
      }
  },
  trailingSlash: true,
  images: {
    loader: "custom"
  }
}
