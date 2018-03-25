import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/Home'*/


/* 使用Vue.use()声明使用VueRouter实例 */
Vue.use(Router)

/* 具体信息页面 */
import Home from '@/components/Home'
import Detail from '@/components/Detail'

export default new Router({
  linkActiveClass:"active",
  mode:"history",
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})
