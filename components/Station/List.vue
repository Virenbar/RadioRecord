<script setup lang="ts">
const { stations } = useData()
const fake = (4 - (stations.value.length % 4)) % 4;
</script>
<template>
  <div class="d-flex align-items-center justify-content-between font-monospace">
    <h5>Каналов: {{ stations.length }}</h5>
    <StationSort />
  </div>
  <div class="d-flex flex-wrap justify-content-center">
    <StationCard v-for="station in stations" :key="station.id" :station="station" />
    <StationCard v-for="n in fake" :key="n" />
  </div>
</template>
