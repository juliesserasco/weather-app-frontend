import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/home/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: Index,
    },
  ],
});

export default router;