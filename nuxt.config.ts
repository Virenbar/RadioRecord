import { execSync } from 'child_process';

const exec = (command: string) => execSync(command).toString().trim();
const branch = exec('git branch --show-current') || process.env.HEAD;
const hash = exec('git rev-parse HEAD') || process.env.COMMIT_REF;
const date = new Date().toISOString();

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-gtag',
    '@artmizu/yandex-metrika-nuxt',
  ],
  css: [
    '@/assets/css/styles.scss',
  ],
  runtimeConfig: {
    public: {
      repository: 'https://github.com/Virenbar/RadioRecord',
      branch: branch,
      hash: hash,
      date: date,
    },
  },
  compatibilityDate: '2025-02-03',
  // Silencing the deprecation warnings
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  gtag: { id: 'G-J31NMXDD2E' },
  yandexMetrika: { id: '87731504' },
});
