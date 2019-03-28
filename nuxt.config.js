const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://huodong.bthome.com/static/budget/js/hotcss.min.js', type: 'text/javascript', charset: 'utf-8'}
    ],
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset-min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: "~/plugins/vue-picker.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
