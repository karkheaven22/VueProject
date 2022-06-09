import Vue from 'vue'
import Router, { RouteConfig, RawLocation, Route } from 'vue-router'
import Meta from 'vue-meta';
const Layout = () => import(/* webpackChunkName: "components/layout" */ '@/components/Layout/index.vue')

const originalPush = Router.prototype.push as unknown as Promise<Route>
Router.prototype.push = function push (location: RawLocation) {
  return (originalPush as any).call(this, location).catch((err: Error) => err)
}

Vue.use(Router)
Vue.use(Meta, { 
  keyName: 'metaInfo',
  refreshOnceOnNavigation: true
})

export const constantRoutes : RouteConfig[] = [
    {
      path: '/redirect',
      component: () => import(/* webpackChunkName: "components/layout" */ '@/components/Layout/index.vue'),
      meta: { hidden: true },
      children: [
        {
          path: '/redirect/:path*',
          component: () => import(/* webpackChunkName: "components/views/redirect" */ '@/views/redirect/index.vue'),
        }
      ]
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: () => import(/* webpackChunkName: "components/views/login" */ '@/views/login/index.vue'),
      meta: { hidden: true, title : "login", metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ] }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/login'
    }, 
    {
      path: '/dashboard',
      component: Layout,
      redirect: '/dashboard/index',
      children: [{
        path: 'index',
        component: () => import(/* webpackChunkName: "components/views/dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true,
          noCache: true
        }
      }]
    },
    {
      path: '*',
      redirect: '/error/404',
      meta: { hidden: true }
    },
    {
      path: '/error',
      component: Layout,
      redirect: 'noredirect',
      meta: {
        title: 'errorPages',
        icon: '404'
      },
      children: [
        {
          path: '401',
          component: () => import(/* webpackChunkName: "components/views/error-page-401" */ '@/views/error/401.vue'),
          name: 'Page401',
          meta: {
            title: 'page401',
            noCache: true
          }
        },
        {
          path: '404',
          component: () => import(/* webpackChunkName: "components/views/error-page-404" */ '@/views/error/404.vue'),
          name: 'Page404',
          meta: {
            title: 'page404',
            noCache: true
          }
        }
      ]
    },
    {
      path: '/scan',
      name: 'Scanner',
      component: () => import(/* webpackChunkName: "components/views/scan" */ '@/views/scan/index.vue'),
      meta: { hidden: true, title : "Scanner" }
    }
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition)
          return savedPosition
        else
          return { x: 0, y: 0 }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher
}

export default router
