<script setup lang="ts">
const { getParameter, setParameter } = useHash();
const sort = useSort();
sort.value = getParameter("sort") || "default";

function onSortClick(value: Sort) {
  setParameter("sort", value);
  sort.value = value;
}

const options: SortOptions = [
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
        <button class="dropdown-item" :class="{ 'active': sort == O.key }" type="button" @click="onSortClick(O.key)">
          {{ O.value }}
        </button>
      </li>
    </ul>
  </div>
</template>
