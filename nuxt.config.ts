import CP from "child_process";

const branch = process.env.HEAD || "master";
const hash = CP.execSync("git rev-parse HEAD").toString().trim() || "unknown";
const date = new Date().toISOString();

export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  modules: [
    "@nuxt/eslint",
    "nuxt-gtag",
    "@artmizu/yandex-metrika-nuxt"
  ],
  gtag: { id: "G-J31NMXDD2E" },
  yandexMetrika: { id: "87731504" },
  runtimeConfig: {
    public: {
      repository: "https://github.com/Virenbar/RadioRecord",
      branch: branch,
      hash: hash,
      date: date
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
