<script setup lang="ts">
const { repository, branch } = useRuntimeConfig().public;
</script>
<template>
  <div class="container p-3 w-50">
    <div class="card text-center">
      <div class="card-header">
        <b>О сайте</b>
      </div>
      <div class="card-body text-center w-75 mx-auto">
        <p>
          Данный сайт использовался для изучения HTML/CSS/JS.
        </p>
        <p>
          Изначально был создан в виде самописного генератора страницы, затем был переписан на preact (альтернатива react).
          И в конечном итоге переписан на фреймворк Nuxt.
        </p>
        <p>
          Плейлисты с всегда актуальным списком каналов доступны
          <NuxtLink target="_blank" :to="`${repository}/tree/${branch}/playlists`">
            <span>здесь</span>
          </NuxtLink>.
        </p>
      </div>
      <div class="card-footer text-center">
        <NuxtLink class="btn btn-outline-primary" target="_blank" to="https://radiorecord.ru/">
          Сайт радио Record
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
