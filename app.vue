<script setup lang="ts">
const title = "Каналы радио Record";
const description = "Автоматически обновляемый список ссылок на каналы радио Record";
useHead({
  title,
  link: [
    { rel: "icon", type: "image/png", href: "https://www.radiorecord.ru/favicon.ico" }
  ],
  meta: [
    { name: "description", content: description }
  ],
  htmlAttrs: {
    "data-bs-theme": "dark"
  }
});
useServerSeoMeta({
  ogType: "website",
  ogTitle: title,
  ogSiteName: title,
  ogUrl: "https://virenbar.ru/RadioRecord/",
  ogDescription: description,
  description,
  ogImage: "https://www.radiorecord.ru/logo300-300.jpg",
  ogImageSecureUrl: "https://www.radiorecord.ru/logo300-300.jpg"
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
