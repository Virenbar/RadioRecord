<script setup lang="ts">
const config = useRuntimeConfig();
const repository = config.public.repository;

const branch = config.public.branch;
const branchURL = `${repository}/tree/${branch}`;

const tree = config.public.hash.substring(0, 7);
const treeURL = `${repository}/tree/${config.public.hash}`;

const date = formatDate(new Date(config.public.date)).replaceAll(".", "");
</script>
<template>
  <footer class="container-fluid py-1 px-3 d-flex justify-content-between font-monospace">
    <div>
      Made with
      <a href="https://nuxt.com/" target="_blank">
        Nuxt
      </a>
      and
      <a href="https://pages.github.com/" target="_blank">
        GitHub Pages
      </a>
    </div>

    <div class="d-none d-md-block">
      Version:
      <a :href="branchURL" target="_blank">
        {{ config.public.branch }}
      </a>
      <span v-if="tree != 'unknown'">@<a :href="treeURL" target="_blank"> {{ tree }} </a></span>
      <span>#{{ date }}</span>
    </div>
  </footer>
</template>
