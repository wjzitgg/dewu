import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import My from '@/pages/my'
import Find from '@/pages/find'
import GoodStuff from '@/pages/goodStuff'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/goodStuff',
      name: 'goodStuff',
      component: GoodStuff
    },
  ]
})
