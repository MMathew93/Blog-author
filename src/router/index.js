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
  },
  {
    path: "/posts/create",
    name: "CreatePost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "createpost" */ "../views/CreatePost.vue")
  },
  {
    path: "/posts/update/:id",
    name: "UpdatePost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "updatepost" */ "../views/UpdatePost.vue"),
    props: true
  },
  {
    path: "/posts/delete/:id",
    name: "DeletePost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "deletepost" */ "../views/DeletePost.vue"),
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
