<script setup lang="ts">
import { sortBy } from "lodash-es";
import Stations from "../../data/stations.json";

const sort = useSort();
const stations = computed(() => {
  switch (sort.value) {
    case "A-Z":
      return sortBy(Stations.list, S => S.title.toLowerCase());
    case "new":
      return sortBy(Stations.list, S => S.prefix == "record" ? 0 : -S.id);
    default:
      return Stations.list;
  }
});
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
