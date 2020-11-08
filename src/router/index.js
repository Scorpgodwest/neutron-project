import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overview from "@/views/Overview";
import Registration from "@/views/Registration";
import General from "@/views/General";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/general',
    name: 'General',
    component: General
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
