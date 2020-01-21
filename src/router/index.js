import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/util/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "site" */ '../views/home')
  },
  {
    path: '/case',
    name: 'case',
    component: () => import(/* webpackChunkName: "site" */ '../views/case')
  }
]

const router = new VueRouter({
  mode: 'history',
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
