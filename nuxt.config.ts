export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  modules: ["nuxt-gtag", "yandex-metrika-module-nuxt3"],
  gtag: { id: "G-J31NMXDD2E" },
  yandexMetrika: { id: "87731504" },
  runtimeConfig: {
    public: {
      repository: "https://github.com/Virenbar/RadioRecord",
      branch: process.env.BRANCH || "master",
      hash: process.env.COMMIT_REF || "unknown",
      date: new Date().toISOString()
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
