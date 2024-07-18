<script setup lang="ts">
import FishAnimation from "@/components/FishAnimation.vue";

const greeting = "Добро пожаловать на наш сайт!";
const description = "Здесь вы найдете много интересного и полезного.";
</script>

<template>
  <div class="home-view">
    <h1>{{ greeting }}</h1>
    <p>{{ description }}</p>
    <FishAnimation />
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  text-align: center;
  margin-top: 50px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    color: #666;
  }
}
</style>
