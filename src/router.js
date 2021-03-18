import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login.vue'
import home from './home'

Vue.use(Router)

// eslint-disable-next-line no-unused-vars
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: home
    }
  ]
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to  将要访问的路径
  //from 代表从哪个路径跳转而来
  //next  放行
  if (to.path === '/login') return next();
  //获取tocken
  const tockenStr = window.sessionStorage.getItem('token');
  if (!tockenStr) return next('/login')
  next()
})
export default router
