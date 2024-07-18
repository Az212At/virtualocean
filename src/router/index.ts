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
        {
          path: "/gallery",
          name: "FishGallery",
          component: () => import("@/views/FishGallery.vue"),
        },
        {
          path: "/fish/:id",
          name: "FishDetail",
          component: () => import("@/views/FishDetail.vue"),
        },
        {
          path: "/create-aquarium",
          name: "CreateAquarium",
          component: () => import("@/views/CreateAquarium.vue"),
        },
      ],
    },
  ],
});

export default router;
