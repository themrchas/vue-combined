import { createRouter, createWebHistory } from 'vue-router'
import RefDemo from '../views/RefDemo.vue'
import ReactiveDemo from '../views/ReactiveDemo.vue'
import Basics from '../views/Basics.vue'

const routes = [
  {
    path: '/',
    name: 'refDemo',
    component: RefDemo
  },
  {
    path: '/reactive',
    name: 'reactiveDemo',
    component: ReactiveDemo
  },
  {
    path: '/basics',
    name: 'vueBasics',
    component: Basics
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
