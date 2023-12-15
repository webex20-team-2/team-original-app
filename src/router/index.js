import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import PostMemo from "@/views/PostMemo.vue"
import MapView from "@/views/MapView.vue"
import MapForm from "@/views/MapForm.vue"
import MyMemo from "@/views/MyMemo.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/post-memo",
    name: "postMemo",
    component: PostMemo,
  },
  {
    path: "/map-view",
    name: "mapView",
    component: MapView,
  },
  {
    path: "/map-form",
    name: "mapForm",
    component: MapForm,
  },
  {
    path: "/my-memo",
    name: "myMemo",
    component: MyMemo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
