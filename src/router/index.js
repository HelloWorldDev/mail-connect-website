import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
    // component: () => import('../views/login/login.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  model:'hash',
  routes
})

export default router
