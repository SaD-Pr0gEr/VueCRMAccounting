import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '', name: 'home', component: () => import('@/views/HomeView.vue')},
  {path: '/categories', name: 'categories', component: () => import('@/views/CategoriesView.vue')},
  {path: '/login', name: 'login', component: () => import('@/views/LoginView.vue')},
  {path: '/register', name: 'register', component: () => import('@/views/RegisterView.vue')},
  {path: '/history', name: 'history', component: () => import('@/views/HistoryView.vue')},
  {path: '/history/detail', name: 'detailHistory', component: () => import('@/views/HistoryDetail.vue')},
  {path: '/planning', name: 'planning', component: () => import('@/views/PlanningView.vue')},
  {path: '/record/new', name: 'newRecord', component: () => import('@/views/RecordView.vue')},
  {path: '/user/profile', name: 'userProfile', component: () => import('@/views/ProfileView.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
