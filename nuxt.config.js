
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-vue-multiselect',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: 'user/login', method: 'post', propertyName: 'token' },
        logout: { url: 'user/logout', method: 'post' },
        user: { url: 'user/details', method: 'get', propertyName: 'user' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer',
      // globalToken: true,
      // autoFetchUser: true
    }
  }
},
axios:{
   baseURL: 'http://127.0.0.1:8000/api/v1/',
},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
