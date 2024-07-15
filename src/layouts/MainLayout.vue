<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "MainLayout",
});
</script>

<template>
  <div class="main-layout">
    <nav>
      <RouterLink :to="{ name: 'HomeView' }">HomeView</RouterLink>
      <RouterLink :to="{ name: 'PostView' }">PostView</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;

  > nav {
    height: 100px;
    background: aqua;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 0 12px;

    > a {
      color: black;

      &:hover {
        color: #aaa7a7;
      }
    }
  }
}
</style>
