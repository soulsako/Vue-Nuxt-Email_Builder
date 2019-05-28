const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }, 
      { href: "https://fonts.googleapis.com/css?family=Open+Sans:400,700", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Lato:400,700", rel:"stylesheet" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/font.styl', 
    '~assets/styles/main.css', 
    '~static/hco_fonts/hco_fonts.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify', 
    '@/plugins/core-components.js', 
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    //Axios now available on the global instance. Use it by accessing this.$axios.$get etc.
    //Note: The response will now be available as just response and NOT response.data
    //If using axios in async server side functions - Use context.app.$axios.$get etc.
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: [
      '~assets/styles/main.scss',
      ]
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    transition: {
      name: 'fade', 
      mode: 'in-out'
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
