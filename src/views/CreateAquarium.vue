<script setup lang="ts">
import { ref } from "vue";
import { useFishStore } from "@/state";

const { fishList, addFish } = useFishStore();

const name = ref("");
const size = ref("");
const color = ref("");

const handleAddFish = () => {
  addFish({ name: name.value, size: size.value, color: color.value });
  name.value = "";
  size.value = "";
  color.value = "";
};

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}vh`,
  left: `${Math.random() * 80 + 10}vw`,
});

const getRandomDuration = () => `${Math.random() * 20 + 10}s`;
const getRandomDirection = () => (Math.random() > 0.5 ? 1 : -1);
</script>

<template>
  <div>
    <h1>Аквариум</h1>
    <form @submit.prevent="handleAddFish">
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
    <div class="aquarium-water">
      <div
        v-for="(fish, index) in fishList"
        :key="index"
        class="fish"
        :class="`fish-${fish.id} size-${fish.size}`"
        :style="{
          top: getRandomPosition().top,
          left: getRandomPosition().left,
          animationDuration: getRandomDuration(),
          transform: `scaleX(${getRandomDirection()})`,
        }"
      >
        <div class="fish-drawing" :class="`fish-${fish.id}`">
          <div class="face">
            <div class="eye left"></div>
            <div class="eye right"></div>
            <div class="smile"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aquarium-water {
  position: relative;
  width: 80%;
  max-width: 1200px;
  height: 480px;
  background: linear-gradient(180deg, #00bfff, #1e90ff);
  overflow: hidden;
  margin: 20px auto;
}
</style>
