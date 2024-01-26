import { createRouter, createWebHistory } from 'vue-router'
import RefDemo from '../views/RefDemo.vue'
import ReactiveDemo from '../views/ReactiveDemo.vue'
import WatcherDemo from '../views/WatcherDemo.vue'
import Basics from '../views/Basics.vue'

import Model from '../views/atomic/Model.vue'
import Looping from '../views/atomic/Looping.vue'
import Bind from '../views/atomic/Bind.vue'

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
    path: '/watch',
    name: 'watchDemo',
    component: WatcherDemo
  },
  {
    path: '/basics',
    name: 'vueBasics',
    component: Basics
  },
  {
    path:'/model',
    name: "model",
    component: Model
  },
  {
    path:'/looping',
    name: "looping",
    component: Looping
  },
  {
    path:'/bind',
    name: "bind",
    component: Bind
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
