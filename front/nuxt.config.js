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
      './plugins/axios',
      '@plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
        '@nuxtjs/toast',
    ],
  /*
  ** Axios module configuration
  */
    axios: {
        baseURL: process.env.LARAVEL_ENDPOINT
    },
    auth: {
        redirect: {
            login: "/login",
            logout: "/",
            callback: "/login",
            user: "/"
        },
        strategies: {
            password_grant: {
                _scheme: "local",
                endpoints: {
                    login: {
                        url: "/oauth/token",
                        method: "post",
                        propertyName: "access_token"
                    },
                    logout: false,
                    user: {
                        url: "api/auth/me"
                    }
                }
            }
        }
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
