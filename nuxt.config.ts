export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  app: {
    baseURL: "/RadioRecord/"
  },
  modules: ["nuxt-gtag", "yandex-metrika-module-nuxt3"],
  gtag: { id: "G-J31NMXDD2E" },
  yandexMetrika: { id: "87731504" },
  runtimeConfig: {
    public: {
      date: process.env.DATE ?? "2000.01.01"
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/css/variables.scss\";"
        }
      }
    }
  }
});
