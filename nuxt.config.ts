// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
      '@nuxtjs/tailwindcss',
      'shadcn-nuxt',
      '@nuxtjs/google-fonts',
      '@nuxt/icon',
    ],
    css: ['~/src/index.css'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    googleFonts: {
        families: {
            Geist: true,
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})