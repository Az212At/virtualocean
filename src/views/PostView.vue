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
  <div class="posts-page">
    <template v-if="isLoading === false">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </template>

    <span v-else class="icon-loader" />
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
  position: relative;

  .icon-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #969696;
    width: 24px;
    height: 24px;
  }
}
</style>
