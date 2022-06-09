import Vue from 'vue'
import Vuetify from 'vuetify'
import i18n, { getLocale } from '@/utils/language'
import '@mdi/font/css/materialdesignicons.css'
// User defined lang
import enLocale from '@/utils/language/en'
import zhLocale from '@/utils/language/zh'

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    light: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  lang: {
    locales: { enLocale, zhLocale },
    current: getLocale(),
    t: (key, ...params) => i18n.t(key, params)
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    light: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  lang: {
    locales: { enLocale, zhLocale },
    current: getLocale(),
    t: (key, ...params) => i18n.t(key, params)
  }
})
