import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Classes from "../views/Classes.vue"
import Coaches from "../views/Coaches.vue"
import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import NotFound from "../views/NotFound.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes
  },
  {
    path: "/coaches",
    name: "coaches",
    component: Coaches
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/contacts",
    name: "Contact",
    component: Contact
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
