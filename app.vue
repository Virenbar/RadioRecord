<script setup lang="ts">
const title = "Каналы радио Record";
const description = "Автоматически обновляемый список ссылок на каналы радио Record";
const logo = "https://www.radiorecord.ru/logo300-300.jpg"
useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} - ` : "") + title,
  link: [{ rel: "icon", type: "image/png", href: "https://www.radiorecord.ru/favicon.ico" }],
  meta: [{ name: "description", content: description }],
  htmlAttrs: { lang: "ru", "data-bs-theme": "dark" }
});
useSeoMeta({
  description,
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  ogSiteName: title,
  ogTitle: title,
  ogType: "website",
  ogUrl: "https://virenbar.ru/RadioRecord/",
  twitterCard: "summary",
  twitterDescription: description,
  twitterImage: logo,
  twitterTitle: title
});
</script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>