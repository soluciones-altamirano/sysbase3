import pkg from './package'
require('dotenv').config();

export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        htmlAttrs: {
            lang: 'es',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
      /* Import Simple Line Icons Set */
      '~/node_modules/simple-line-icons/css/simple-line-icons.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      './plugins/mixins/validation',
      './plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',

        '@nuxtjs/pwa',

        '@nuxtjs/dotenv',
    ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
