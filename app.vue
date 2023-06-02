<script setup lang="ts">
useHead({
  title: "Каналы радио Record",
  link: [
    { rel: "icon", type: "image/png", href: "https://www.radiorecord.ru/favicon.ico" }
  ],
  meta: [
    { name: "description", content: "Автоматически обновляемый список ссылок на каналы радио Record" }
  ]
});
useSeoMeta({
  ogType: "website",
  ogTitle: "Каналы радио Record",
  ogSiteName: "Каналы радио Record",
  ogUrl: "https://virenbar.ru/RadioRecord/",
  ogDescription: "Автоматически обновляемый список ссылок на каналы радио Record",
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
