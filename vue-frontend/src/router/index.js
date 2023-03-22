import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Signup from '../views/SignupView.vue'
import Account from '../views/AccountHomeView.vue'
import Section from '../views/SectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { transition: 'fade', isAlive: true }
    },
    { path: '/signup', component: Signup, meta: { transition: 'slide-right' } },
    { path: '/account', component: Account, meta: { transition: 'slide-right' } },
    { path: '/section/:name', component: Section, meta: { transition: 'slide-right' } }
  ]
})

export default router
