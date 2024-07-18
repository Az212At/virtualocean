<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main-layout">
    <header>
      <nav>
        <RouterLink :to="{ name: 'HomeView' }" class="nav-link">
          Главная
        </RouterLink>
        <RouterLink :to="{ name: 'FishGallery' }" class="nav-link">
          Галерея
        </RouterLink>
        <RouterLink :to="{ name: 'FishDetail' }" class="nav-link">
          Детали
        </RouterLink>
        <RouterLink :to="{ name: 'CreateAquarium' }" class="nav-link">
          Аквариум
        </RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;

  > header {
    background-color: aqua;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  > header > nav {
    display: flex;
    gap: 12px;
  }

  .nav-link {
    color: black;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
      background-color: #eee;
    }
  }

  > main {
    padding: 20px;
    overflow-y: auto;
  }

  > footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
  }
}
</style>
