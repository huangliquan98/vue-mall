import Vue from 'vue'
import Router from 'vue-router'
const homeA = ()=> import('../views/home/homeA')
const aboutA = ()=> import('../views/about/aboutA')
const cartA = ()=> import('../views/cart/cartA')
const profileA = ()=> import('../views/profile/profileA')
const detail = ()=> import('../views/detail/detail')
const login = ()=> import('../views/login/login')

Vue.use(Router)

import VueRouter from "vue-router";

//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


export default new Router({
  routes: [
    {
      path:'',
      redirect:'/homeA'
    },{
      path:'/homeA',
      component:homeA,
    },{
      path:'/aboutA/:name',
      component:aboutA
    },{
      path:'/cartA',
      component:cartA
    },{
      path:'/profileA',
      component:profileA
    },
    {
      path:'/detail/:iid',
      component:detail
    },
    {
      path:'/login',
      component:login
    }
  ],
  // mode:'history'
})
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
