import type { RouteRecordRaw } from "vue-router";
import RouterLayout from '@/layouts/RouterLayout.vue'

const homeRouter: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/home/index",
    component: RouterLayout,
    children: [{path: "index",name: "home",component:()=>import("@/views/home/Home.vue")}]
  }
]

export default homeRouter