import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import PostMemo from "@/views/PostMemo.vue"
import MapView from "@/views/MapView.vue"
import MyMemo from "@/views/MyMemo.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
