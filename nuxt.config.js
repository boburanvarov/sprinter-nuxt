
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sprinter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/fonts/stylesheet.css',
    '~/assets/styles/main.scss',
    'assets/icomoon/style.css',

    // swiper
    // '~swiper/css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  {
    src: '~/plugins/v-mask.js',
    // mode: 'client'
  }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
  // ],
  // modules: [
  //   '@nuxtjs/axios',
  //   ['nuxt-mail', {
  //     message: {
  //       to: 'boburcoder2003@gmail.com',
  //     },
  //       service: 'gmail',
  //       smtp: {
  //       host: 'smtp.gmail.com',
  //       port: 465,
  //        secure: 'ssl',
  //       auth: {
  //         user: 'boburcoder2003@gmail.com',
  //         pass: 'jkzobjxcosujklbv',
  //       },
  //     },
  //   }],
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
