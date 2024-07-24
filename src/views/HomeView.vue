<script setup lang="ts">
import { ref, onMounted } from "vue";

const fishTypes = [
  {
    id: 1,
    name: "Рыба-клоун",
    size: "Маленький",
    color: "Оранжевый",
    art: "1",
  },
  {
    id: 2,
    name: "Гуппи",
    size: "Маленький",
    color: "Разноцветный",
    art: "2",
  },
  {
    id: 3,
    name: "Золотая рыбка",
    size: "Средний",
    color: "Золотой",
    art: "3",
  },
  {
    id: 4,
    name: "Бетта",
    size: "Маленький",
    color: "Красный",
    art: "4",
  },
  {
    id: 5,
    name: "Сом",
    size: "Средний",
    color: "Серый",
    art: "5",
  },
  {
    id: 6,
    name: "Меченосец",
    size: "Средний",
    color: "Красный",
    art: "6",
  },
  {
    id: 7,
    name: "Скалярия",
    size: "Средний",
    color: "Черный",
    art: "7",
  },
  {
    id: 8,
    name: "Платид",
    size: "Маленький",
    color: "Зеленый",
    art: "8",
  },
  {
    id: 9,
    name: "Гурами",
    size: "Маленький",
    color: "Синий",
    art: "9",
  },
  {
    id: 10,
    name: "Карась",
    size: "Средний",
    color: "Золотистый",
    art: "10",
  },
];

const fishList = ref(fishTypes.flatMap((fish) => Array(3).fill(fish)));

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}vh`, // Оставляем отступы от краев
  left: `${Math.random() * 80 + 10}vw`,
});

const getRandomDuration = () => `${Math.random() * 20 + 10}s`;
const getRandomDirection = () => (Math.random() > 0.5 ? 1 : -1);

onMounted(() => {
  const fishElements = document.querySelectorAll(".fish");
  fishElements.forEach((fish) => {
    const direction = getRandomDirection();
    fish.style.transform = `scaleX(${direction})`;
    fish.style.animationDirection = direction === 1 ? "normal" : "reverse";
  });
});
</script>

<template>
  <div class="home-view">
    <h1>Добро пожаловать в цифровой аквариум!</h1>
    <div class="water">
      <div
        v-for="(fish, index) in fishList"
        :key="index"
        class="fish"
        :class="`fish-${fish.art} size-${fish.size}`"
        :style="{
          top: getRandomPosition().top,
          left: getRandomPosition().left,
          animationDuration: getRandomDuration(),
        }"
      >
        <div :class="`fish-drawing fish-${fish.art}`">
          <div class="body"></div>
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

<style scoped lang="scss">
$fish-size-small: 80px;
$fish-size-medium: 100px;
$fish-size-large: 120px;
$eye-size: 10px;
$smile-width: 40px;
$smile-height: 20px;

@mixin fish-style($bg-color, $gradient-color) {
  background: linear-gradient(to bottom, $bg-color, $gradient-color);
}

@keyframes swim {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(100vw);
  }
}

@keyframes swim-reverse {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100vw);
  }
}

.home-view {
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  .water {
    position: relative;
    width: 85%;
    max-width: 1200px;
    height: 480px;
    background: linear-gradient(180deg, #00bfff, #1e90ff);
    overflow: hidden;
    margin: 0 auto;
  }

  .fish {
    position: absolute;
    animation: swim linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;

    &.size-Маленький {
      width: $fish-size-small;
      height: calc($fish-size-small * 0.6);
    }
    &.size-Средний {
      width: $fish-size-medium;
      height: calc($fish-size-medium * 0.6);
    }
    &.size-Большой {
      width: $fish-size-large;
      height: calc($fish-size-large * 0.6);
    }

    .fish-drawing {
      width: $fish-size-medium;
      height: $fish-size-medium * 0.6;
      margin-bottom: 10px;
      position: relative;
      border-radius: 30% 30% 20% 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.fish-1 {
        @include fish-style(orange, darkorange);
      }

      &.fish-2 {
        @include fish-style(red, yellow);
      }

      &.fish-3 {
        @include fish-style(gold, darkgoldenrod);
      }

      &.fish-4 {
        @include fish-style(red, darkred);
      }

      &.fish-5 {
        @include fish-style(purple, darkviolet);
      }

      &.fish-6 {
        @include fish-style(lightgreen, green);
      }

      &.fish-7 {
        @include fish-style(pink, lightcoral);
      }

      &.fish-8 {
        @include fish-style(green, darkgreen);
      }

      &.fish-9 {
        @include fish-style(lightblue, blue);
      }

      &.fish-10 {
        @include fish-style(goldenrod, darkgoldenrod);
      }

      .face {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .eye {
        width: $eye-size;
        height: $eye-size;
        background: black;
        border-radius: 50%;
        position: absolute;
        bottom: 5px;
      }

      .eye.left {
        left: 20px;
      }

      .eye.right {
        right: 20px;
      }

      .smile {
        width: $smile-width;
        height: $smile-height;
        border-radius: 0 0 50% 50%;
        background: black;
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        border: 2px solid black;
      }
    }
  }
}
</style>
