// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    '@/styles/colors.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/colors.scss" as *;`,
        },
      },
    },
  },



  

})
