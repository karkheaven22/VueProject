import router from '@/router';
import NProgress from 'nprogress'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import i18n from '@/utils/language';
import { getToken } from '@/utils/cookies'


NProgress.configure({ showSpinner: true })

const whiteList = ['/login', '/auth-redirect', '/scan']

const getPageTitle = (key: string) => {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName}`
  }
  return ``
}

router.beforeEach(async(to: Route, _: Route, next: any) => {
    // Start progress bar
    NProgress.start()
    // set page title
    console.log(to.path)
    document.title = getPageTitle(to.meta.title)
    //Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode?.removeChild(el));
    // Determine whether the user has logged in
    if (UserModule.token) {
      //alert(UserModule.token)
      if (to.path === '/login') {
        // If is logged in, redirect to the home page
        NProgress.done()
        next({ path: '/dashboard' })
      } else {
        // Check whether the user has obtained his permission roles
        if (UserModule.roles.length === 0) {
          try {
            // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
            await UserModule.GetUserInfo()
            //const roles = UserModule.roles
            // Generate accessible routes map based on role
            //PermissionModule.GenerateRoutes(roles)
            // Dynamically add accessible routes
            //router.addRoutes(PermissionModule.dynamicRoutes)
            // Hack: ensure addRoutes is complete
            // Set the replace: true, so the navigation will not leave a history record
            //console.log(to)
            next({ ...to, replace: true })
          } 
          catch (err) {
            // Remove token and redirect to login page
            console.log(err)
            UserModule.ResetToken()
            //Message.error(err || 'Has Error')
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        } else {
          next()
        }
      }
    } else {
      // Has no token
      if (whiteList.indexOf(to.path) !== -1) {
        // In the free login whitelist, go directly
        
        next()
      } else {
        // Other pages that do not have permission to access are redirected to the login page.
        NProgress.done()
        next(`/login?redirect=${to.path}`)
      }
    }
  })

router.afterEach((to: Route) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()
  console.log(to.path)
  // set page title
  document.title = getPageTitle(to.meta.title)
})
