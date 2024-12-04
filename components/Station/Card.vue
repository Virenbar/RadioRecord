<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">

const props = defineProps<{ station?: Station }>();
const S = computed(() => props.station);
</script>
<template>
  <div v-if="S" class="card">
    <div class="card-header d-flex flex-nowrap align-items-center">
      <h5>
        <NuxtLink :href="S.shareUrl" target="_blank">{{ S.title }}</NuxtLink>
      </h5>
      <div v-if="S.new" class="mx-1 new">
        NEW
      </div>
      <div class="logo ms-auto" v-html="S.svg_fill" />
    </div>
    <div class="card-body">
      {{ S.tooltip }}
    </div>
    <div class="card-footer text-center">
      <div class="btn-group btn-group-sm" role="group" area-label="Links">
        <NuxtLink class="btn btn-outline-primary" :to="S.stream_64" target="_blank">AAC 64</NuxtLink>
        <NuxtLink class="btn btn-outline-primary" :to="S.stream_128" target="_blank">AAC 96</NuxtLink>
        <NuxtLink class="btn btn-outline-primary" :to="S.stream_hls" target="_blank">M3U</NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="card fake" />
</template>
<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.card {
  flex: 1 1 0;
  margin: 3px;
  min-width: 300px;
  border-radius: 10px;
  border: 2px solid $neutrals-800;
  outline: $borders-night-dark solid 2px;
  transition: all .3s;

  h5 {
    margin: 0;
  }

  &:hover {
    outline: $brand-accent solid 2px;
  }

  &.fake {
    visibility: hidden;
  }
}

.logo {
  display: block;
  margin: -5px;
  width: 40px;
  height: 40px;

  :deep(svg) {
    width: 100%;
    height: 100%
  }

  :deep(path) {
    fill: $brand-accent !important;
  }
}

.new {
  background: $red;
  border-radius: 4px;
  padding: 0 5px;
  font-size: .8rem;
}
</style>
