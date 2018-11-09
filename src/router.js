/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/tabBar'
import Index from '@/page/index/index'
import Classfiy from '@/page/classify/index'
import Cart from '@/page/cart/index'
import My from '@/page/my/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/classfiy',
      name: 'classfiy',
      component: Classfiy
    }, {
      path: '/cart',
      name: 'cart',
      component: Cart
    }, {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
