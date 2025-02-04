import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const 
  Login = () => import('@/views/login/index'),
  Error = () => import('@/views/error/404'),
  Permission = () => import('@/views/error/403')

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/404',
    name: '404',
    meta: {
      title: "404"
    },
    component: Error
  }, {
    path: '/403',
    name: '403',
    meta: {
      title: "403"
    },
    component: Permission
  }] 
})

export default router 