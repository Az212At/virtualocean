<script setup lang="ts">
import { ref, computed } from "vue";
import { useFishStore } from '@/state';
import FishCard from '@/components/FishCard.vue';

const { fishList } = useFishStore();

const sortKey = ref('name');
const filterText = ref('');

const sortedAndFilteredFish = computed(() => {
  return fishList.value
    .filter(
      (fish) =>
        fish.name.toLowerCase().includes(filterText.value.toLowerCase()) ||
        fish.size.toLowerCase().includes(filterText.value.toLowerCase()) ||
        fish.color.toLowerCase().includes(filterText.value.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortKey.value] > b[sortKey.value]) {
        return 1;
      } else if (a[sortKey.value] < b[sortKey.value]) {
        return -1;
      }
      return 0;
    });
});
</script>

<template>
  <div>
    <h2>Галерея Рыб</h2>
    <label for="sort">Сортировать по:</label>
    <select id="sort" v-model="sortKey">
      <option value="name">Имя</option>
      <option value="size">Размер</option>
      <option value="color">Цвет</option>
    </select>
    <label for="filter">Фильтр:</label>
    <input
        id="filter"
        v-model="filterText"
        placeholder="Введите текст для фильтрации"
    />
    <div class="fish-gallery">
      <FishCard
          v-for="fish in sortedAndFilteredFish"
          :key="fish.id"
          :fish="fish"
      />
    </div>
  </div>
</template>

<style scoped>
.fish-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  justify-content: center;
}
</style>
