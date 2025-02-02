import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/index.vue'


export const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: () => import('../views/redirect/index')
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   component: () => import('@views/login/index'),
  //   hidden: true
  // },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@views/login/auth-redirect'),
  //   hidden: true
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('../views/home/index'),
        name: 'Home',
        meta: { title: 'Home', affix: true }
      },
      // {
      //   path: '/message',
      //   component: () => import('../views/message/index'),
      //   name: 'Message',
      //   meta: { title: 'Message', affix: true }
      // }
    ]
  },
  // {
  //   path: '/message',
  //   component: Layout,
  //   redirect: '/message',
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/home/index'),
  //       name: 'Home',
  //       meta: { title: 'Home', affix: true }
  //     }
  //   ]
  // },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/profile',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'profile', icon: 'user' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuevue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
