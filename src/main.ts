import Vue from "vue"
import App from '@/App.vue'
import Vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import i18n from '@/utils/language'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/permission'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/main.scss'
import { Notification } from 'element-ui'

Vue.config.productionTip = true

// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.use(Element, {i18n: (key :any, value : any) => i18n.t(key, value)})
Vue.prototype.$notify = Notification
Vue.config.productionTip = process.env.NODE_ENV === 'production'

let v = new Vue({
    vuetify: Vuetify,
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");

