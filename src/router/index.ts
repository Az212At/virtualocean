import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "HomeView",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "/post",
          name: "PostView",
          component: () => import("@/views/PostView.vue"),
        },
      ],
    },
  ],
});

export default router;
