import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: '',
    redirect: 'home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
