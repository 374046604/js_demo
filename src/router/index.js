import Vue from 'vue'
import VueRouter from 'vue-router'
import { importAll } from '@/utils'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{path: '/',name: 'Home',component: Home}].concat(importAll(require.context('../components', true, /\.vue/)))
})

export default router
