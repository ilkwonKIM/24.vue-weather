import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daily from '../views/Daily.vue'
import Weekly from '../views/Weekly.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daily',
    name: 'Daily',
    component: Daily
  },
  {
    path: '/weekly',
    name: 'Weekly',
    component: Weekly
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
