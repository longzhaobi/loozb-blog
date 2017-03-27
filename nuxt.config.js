module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Long Zhao Bi\'s Personal Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: 'user-agent'
  },

  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', '~assets/css/zui.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios']
  }
}
