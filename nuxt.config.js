const environment = require('./environment');

module.exports = {
  mode: 'universal',
  env: environment,
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],
  /*
  ** Plugins
  */
  plugins: [
    { src: '@/plugins/nuxt-client-init.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/maps.js', ssr: false }
  ],
  /*
  ** Axios configuration
  */
  axios: {
    proxyHeaders: false,
    credentials: false
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s - ${process.env.websiteName}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WIP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico?v=20190110' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Load globally required SASS resources.
  */
  styleResources: {
    scss: [
      './styles/_variables.scss', // use underscore "_" & also file extension ".scss"
      './styles/_helpers.scss' // use underscore "_" & also file extension ".scss"
    ]
  },
  /*
  ** Load the main SCSS style.
  */
  css: [
    '@/styles/main.scss'
  ],
  /*
  ** markdownit options
  * ** See https://github.com/markdown-it/markdown-it
  */
  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     ['markdown-it-container', containerName],
  //     'markdown-it-attrs'
  //   ]
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
