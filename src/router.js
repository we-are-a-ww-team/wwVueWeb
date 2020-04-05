import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import backManage from './views/backManage.vue'

import productMain from './views/productMain.vue'
import productDetail from './views/productDetail.vue'
import productShow from './views/productShow.vue'
import isBuliding from './views/isBuliding.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/productMain',
      children: [
        {
          path: '/productMain',
          component: productMain
        },
        {
          path: '/productShow',
          component: productShow
        },
        {
          path: '/isBuliding',
          component: isBuliding
        },
        {
          path: '/productDetail',
          component: productDetail
        }
      ]
    },
    {
      path: '/backManage',
      component: backManage
    }
  ]
})
