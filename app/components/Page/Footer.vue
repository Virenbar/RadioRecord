<script setup lang="ts">
const { repository, branch, hash, date } = useRuntimeConfig().public;

const branchURL = `${repository}/tree/${branch}`;
const tree = hash.substring(0, 7);
const treeURL = `${repository}/tree/${hash}`;
</script>
<template>
  <footer class="container-fluid py-1 px-3 d-flex justify-content-between font-monospace">
    <div>
      Made with
      <NuxtLink href="https://nuxt.com/" target="_blank">
        Nuxt
      </NuxtLink>
      and
      <NuxtLink href="https://pages.github.com/" target="_blank">
        GitHub Pages
      </NuxtLink>
    </div>

    <div class="d-none d-md-block">
      Build:
      <NuxtLink :to="branchURL" target="_blank">
        {{ branch }}
      </NuxtLink>
      <span v-if="tree != 'unknown'">@<NuxtLink :to="treeURL" target="_blank"> {{ tree }} </NuxtLink></span>
      <span v-else>#{{ formatDate(new Date(date)).replaceAll(".", "") }}</span>
    </div>
  </footer>
</template>
