<script setup lang="ts">
import { ref } from "vue";

const fishes = ref(
  Array.from({ length: 25 }, (_, id) => ({
    id: id + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${(Math.random() + 1) * 10}s`,
  }))
);
</script>

<template>
  <div class="fish-container">
    <div
      v-for="fish in fishes"
      :key="fish.id"
      :class="'fish fish' + fish.id"
      :style="{
        left: fish.left,
        top: fish.top,
        animationDelay: fish.delay,
        animationDuration: fish.duration,
      }"
    >
      <div class="eye left-eye"></div>
      <div class="eye right-eye"></div>
      <div class="mouth"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fish-container {
  position: relative;
  width: 100%;
  height: 300px; /* Высота, которая нужна для плавающих рыбок */
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    #66ccff 0%,
    #003366 100%
  ); /* Градиент фона, имитирующий воду */
}

.fish {
  position: absolute;
  width: 60px; /* Ширина рыбки */
  height: 30px; /* Высота рыбки */
  background-color: #ffcc66; /* Цвет рыбки */
  border-radius: 50% 50% 0 0; /* Форма рыбки */
  transform-origin: center;
  animation: swim 6s infinite linear;
  animation-timing-function: ease-in-out; /* Тип анимации */
  animation-iteration-count: infinite; /* Бесконечная анимация */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.eye {
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
}

.left-eye {
  left: 10px;
  top: 8px;
}

.right-eye {
  right: 10px;
  top: 8px;
}

.mouth {
  width: 10px;
  height: 4px;
  background-color: black;
  border-radius: 0 0 50% 50%;
  position: absolute;
  bottom: 8px;
}

@keyframes swim {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
