<script setup lang="ts">
const sort = useSort();
sort.value = getHash().get("sort") as Sort || "default";

function getHash() { return new URLSearchParams(location.hash.replace("#", "?")); }

function onSortChange(value: string) {
  const params = getHash();
  params.set("sort", value);
  location.hash = params.toString();
  sort.value = value as Sort;
  console.log(sort.value);
}

const options = [
  { key: "default", value: "По умолчанию" },
  { key: "A-Z", value: "По алфавиту" },
  { key: "new", value: "По новизне" }
];
</script>
<template>
  <div class="dropdown pb-1">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-filter-square" /> Сортировка
    </button>
    <ul class="dropdown-menu">
      <li v-for="O in options" :key="O.key">
        <button class="dropdown-item" :class="{ 'active': sort == O.key }" type="button" @click="onSortChange(O.key)">
          {{ O.value }}
        </button>
      </li>
    </ul>
  </div>
</template>
