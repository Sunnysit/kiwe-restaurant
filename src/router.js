import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
})
