<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["addFish"]);

const name = ref("");
const size = ref("");
const color = ref("");

const addFish = () => {
  emit("addFish", { name: name.value, size: size.value, color: color.value });
  name.value = "";
  size.value = "";
  color.value = "";
};
</script>

<template>
  <form @submit.prevent="addFish">
    <label for="name">Имя рыбки:</label>
    <input id="name" v-model="name" required />
    <label for="size">Размер:</label>
    <select id="size" v-model="size" required>
      <option value="Маленький">Маленький</option>
      <option value="Средний">Средний</option>
      <option value="Большой">Большой</option>
    </select>
    <label for="color">Цвет:</label>
    <input id="color" v-model="color" required />
    <button type="submit">Добавить рыбку</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
