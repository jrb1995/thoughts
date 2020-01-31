import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/util/app'

import Home from '../views/home'
import Case from '../views/case'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/case',
    name: 'case',
    // component: () => import(/* webpackChunkName: "site" */ '../views/case')
    component: Case
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const TOKEN = getToken()
  if (to.name === 'app') {
    if (!TOKEN) {
      next({ path: '/site' })
    } else {
      next({ name: '/site' })
    }
  } else {
    next()
  }
})

router.afterEach(to => {

})

export default router
