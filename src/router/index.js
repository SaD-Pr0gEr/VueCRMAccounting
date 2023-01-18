import { createRouter, createWebHistory } from 'vue-router'
import linksList from "@/router/linksData";

const routes = linksList

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
