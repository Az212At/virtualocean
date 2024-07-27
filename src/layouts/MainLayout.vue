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
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);

  > header {
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
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
    background-color: rgba(51, 51, 51, 0.8);
    color: white;
    text-align: center;
    padding: 10px 0;
  }
}
</style>
