import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/Team.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/newtask",
    name: "newtask",
    component: () => import("../views/CreateTask.vue"),
  },
  {
    path: "/task/:id",
    name: "task",
    component: () => import("../views/Task.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
