import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WordsContainer from "../views/WordsContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/words",
    redirect: "/words/all"
  },
  {
    path: "/words/:category",
    component: WordsContainer
  },
  {
    path: "/user/dashboard",
    component: () => import("../views/UserPanel.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
