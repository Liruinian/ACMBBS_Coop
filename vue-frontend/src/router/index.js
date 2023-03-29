import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Page.vue'

import Signup from '../components/Signup.vue'
import Account from '../views/AccountHomeView.vue'
import Section from '../views/SectionView.vue'
import Post from '../views/PostView.vue'

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
    { path: '/section/:id', component: Section, meta: { transition: 'slide-right' }, props: true },
    { path: '/post/:id', component: Post, meta: { transition: 'slide-right' }, props: true }
  ]
})

export default router
