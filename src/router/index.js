import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WordsContainer from "../views/WordsContainer.vue";
import store from "../store";

Vue.use(VueRouter);

const navGuard = next => {
  if (!store.state.user.isLoggedIn) next({ path: "/" });
  else next();
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/words",
    redirect: "/words/all",
    beforeEnter: navGuard
  },
  {
    path: "/words/:category",
    component: WordsContainer,
    beforeEnter: navGuard
  },
  {
    path: "/user/dashboard",
    component: () => import("../views/UserPanel.vue"),
    beforeEnter: navGuard
  },
  {
    path: "/admin",
    component: () => import("../views/AdminPanel.vue"),
    beforeEnter: navGuard
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
