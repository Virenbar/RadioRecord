<script setup lang="ts">
const config = useRuntimeConfig();
const tree = `${config.public.repository}/tree/${config.public.hash}`;
</script>
<template>
  <footer class="container-fluid py-1 px-3 d-flex justify-content-between font-monospace">
    <div>
      Hosted on <a href="https://pages.github.com">GitHub Pages</a>
    </div>
    <div>
      Version: <a :href="tree" class="text-link" rel="noopener" target="_blank">
        {{ config.public.branch }}@{{ config.public.hash.substring(0, 7) }}
      </a>#{{ formatDate(new Date(config.public.date)) }}
    </div>
    <div>
      Source at <a :href="config.public.repository">GitHub</a>
    </div>
  </footer>
</template>
