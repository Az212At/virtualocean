import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/home",
          name: "HomeView",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
  ],
});

export default router;
