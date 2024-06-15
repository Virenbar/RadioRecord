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
      <div class="card-header text-center">
        <div class="btn-group">
          <button class="btn btn-secondary" @click="changeAll(true)">
            Выбрать все
          </button>
          <button class="btn btn-secondary" @click="changeAll(false)">
            Убрать все
          </button>
        </div>
      </div>
      <div class="card-body mx-auto">
        <ul class="list-unstyled">
          <li v-for="station in stations" :key="station.id">
            <input
              :id="`stationCheck${station.id}`" class="form-check-input me-2" type="checkbox" :checked="checked.has(station.id)"
              @change="changeChecked(station.id)">
            <label class="form-check-label" :for="`stationCheck${station.id}`">
              {{ station.title }}
            </label>
          </li>
        </ul>
      </div>
      <div class="card-footer text-center">
        <div class="btn-group">
          <div class="btn btn-outline-primary active">Скачать</div>
          <button class="btn btn-outline-primary" @click="savePlaylist('AAC 64', checked)">
            AAC 64
          </button>
          <button class="btn btn-outline-primary" @click="savePlaylist('AAC 96', checked)">
            AAC 96
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-body {
  column-width: 10em;
  column-count: 5;
}
</style>
