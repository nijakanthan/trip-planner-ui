import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()

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
    path: '/settings',
    name: 'settings',
    component: () => import('@/pages/SettingsPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/ContactPage.vue')
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

router.beforeEach((to, from) => {
  if (cookies.get('userinfo')) {
    const userInfo = cookies.get('userinfo')
    sessionStorage.setItem('userinfo', userInfo)
    cookies.remove('userinfo')
    // const userInfoObject = JSON.parse(atob(userInfo))
    return true
  } else if (sessionStorage.getItem('userinfo')) {
    const sessionValue = sessionStorage.getItem('userinfo')
    // const userInfoObject = JSON.parse(atob(sessionValue!))
    return true
  } else {
    window.location.href = '/auth/login'
  }
})

export default router
