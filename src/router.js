import { createRouter, createWebHistory } from "vue-router";
import main from "@/page/main.vue";
import contract from "@/page/contract.vue";

const routes = [
  { path: "/", name: "home", component: main },
  { path: "/contract", name: "contract", component: contract }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
