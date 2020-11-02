import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/LogIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn
  },
  {
    path: "/posts",
    name: "Hub",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hub" */ "../views/Hub.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
