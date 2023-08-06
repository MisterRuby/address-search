import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AddressView from "@/views/AddressView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "address",
    component: AddressView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
