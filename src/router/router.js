import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product/Product'
import Payment from '@/components/Payment/Payment'
import Login from '@/components/Admin/Authentication/Login'
import Admin from '@/components/Admin/Admin'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/',component: Product},
    { path: '/payment', component: Payment},
    { path: '/login', component: Login },
    { path: '/monitor', component: Admin, meta: { requiresAuth: true } },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    if (!window.$cookies.isKey('information')) {
      next({ path: '/login' })
    } else {
      next()
    }
    return
  }
  next()
})
export default router
