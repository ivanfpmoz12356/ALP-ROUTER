import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
  path: '/ProfileView',
  name: 'Profile',
  component: () => import( '../views/ProfileVeiw.vue')
  },
  {
    path: '/NewsView',
    name: 'NewsView',
    component: () => import( '../views/NewsView.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
