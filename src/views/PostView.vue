<script lang="ts" setup>
import { computed, defineComponent, onMounted, ref } from "vue";
import { PostCard, usePostStore } from "@/modules/post-page";

defineComponent({
  name: "PostView",
});

const postStore = usePostStore();
const posts = computed(() => postStore.posts);
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = true;

  postStore.getPosts().finally(() => {
    isLoading.value = false;
  });
});
</script>

<template>
  <div v-if="isLoading === false" class="posts-page">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" scoped>
.posts-page {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
</style>
