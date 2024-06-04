<script setup lang="ts">
const { stations } = useData();
const { getItem, setItem } = useLocalStorage();
const { savePlaylist } = useSave();

const checked = ref(new Set<number>);

onMounted(async () => {
  getItem("stations")?.forEach(s => checked.value.add(s));
});

function changeAll(state: boolean) {
  const set = checked.value;
  if (state) {
    stations.value.forEach(s => set.add(s.id));
  } else {
    set.clear();
  }
  setItem("stations", Array.from(set));
}

function changeChecked(id: number) {
  const set = checked.value;
  if (set.has(id)) {
    set.delete(id);
  } else {
    set.add(id);
  }
  setItem("stations", Array.from(set));
}
</script>
<template>
  <div class="container p-3">
    <div class="d-flex align-items-center justify-content-between font-monospace">
      <h5>Каналов: {{ stations.length }}</h5>
      <StationSort />
    </div>
    <div class="card">
      <div class="card-header">
        <div class="btn-group">
          <button class="btn btn-secondary" @click="changeAll(true)">
            Выбрать все
          </button>
          <button class="btn btn-secondary" @click="changeAll(false)">
            Убрать все
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap justify-content-center">
          <div v-for="station in stations" :key="station.id" class="form-check">
            <input
              id="stationCheck" class="form-check-input" type="checkbox" value="" :checked="checked.has(station.id)"
              @change="changeChecked(station.id)">
            <label class="form-check-label" for="stationCheck">
              {{ station.title }}
            </label>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="btn-group">
          <button class="btn btn-primary" @click="savePlaylist('AAC 64')">
            Скачать AAC 64
          </button>
          <button class="btn btn-primary" @click="savePlaylist('AAC 96')">
            Скачать AAC 96
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
label {
  min-width: 10em;
}
</style>
