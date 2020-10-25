import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/fragments",
    name: "fragments",
    component: () =>
      import(/* webpackChunkName: "samples" */ "../views/Fragments.vue")
  },
  {
    path: "/teleport",
    name: "teleport",
    component: () =>
      import(/* webpackChunkName: "samples" */ "../views/Teleport.vue")
  },
  {
    path: "/v-model",
    name: "v-model",
    component: () =>
      import(/* webpackChunkName: "samples" */ "../views/MultiVModel.vue")
  },
  {
    path: "/options",
    name: "options",
    component: () =>
      import(/* webpackChunkName: "samples" */ "../views/OptionsAPI.vue")
  },
  {
    path: "/composition",
    name: "composition",
    component: () =>
      import(/* webpackChunkName: "samples" */ "../views/CompositionAPI.vue")
  },

  {
    path: "/functions",
    name: "functions",
    component: () =>
      import(
        /* webpackChunkName: "samples" */ "../views/CompositionFunctions.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
