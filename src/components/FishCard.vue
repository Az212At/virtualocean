<script setup lang="ts">
import { PropType } from "vue";

interface Fish {
  id: number;
  name: string;
  size: string;
  color: string;
}

defineProps({
  fish: {
    type: Object as PropType<Fish>,
    required: true,
  },
});
</script>

<template>
  <div class="fish-card">
    <div class="fish-drawing" :class="`fish-${fish.id}`">
      <div class="face">
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="smile"></div>
      </div>
    </div>
    <h3>{{ fish.name }}</h3>
    <p>Размер: {{ fish.size }}</p>
    <p>Цвет: {{ fish.color }}</p>
  </div>
</template>

<style scoped lang="scss">
.fish-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 8px 0 4px;
    font-size: 16px;
  }

  p {
    margin: 4px 0;
    font-size: 12px;
  }

  .fish-drawing {
    width: 100px;
    height: 60px;
    margin-bottom: 10px;
    position: relative;
    border-radius: 30% 30% 20% 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, orange, darkorange);

    .face {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: inherit;

      .eye {
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        position: absolute;

        &.left {
          left: 20%;
        }

        &.right {
          right: 20%;
        }
      }

      .smile {
        width: 40px;
        height: 20px;
        border-radius: 50%;
        background: white;
        position: absolute;
        bottom: 20%;
      }
    }
  }
}
</style>
