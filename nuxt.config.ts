// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'beiatrix',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          name: 'description',
          content:
            'Beiatrix Pedrasa is a software engineer and designer.'
        }
      ]
    }
  },
  compatibilityDate: '2025-05-15',
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700]
    },
    provider: 'google'
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons'
      },
    ],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/tippy'
  ],
  ssr: false
});