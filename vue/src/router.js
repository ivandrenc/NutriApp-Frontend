import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Register from "./components/register_form.vue";
import Login from "./components/login_form.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
  ]
});