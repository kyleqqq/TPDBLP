import Vue from 'vue'

import '@/utils/elementui'

import 'normalize.css/normalize.css'// CSS resets
import 'animate.css'// animate css
import '@/styles/index.scss'// global CSS

import App from './App.vue'
import router from './router'
import store from './store'

import lib from '@/utils/libcommon'// general mothods lib
import Log from '@/db/log'// record vue running logs
import api from '@/api/config'// http request api

import '@/icons'// icon
import '@/utils/regcomponents'// register common components

Vue.config.productionTip = false

Vue.prototype.$lib = lib// add lib to vue prototype
Vue.prototype.$log = new Log()// add log to vue prototype
Vue.prototype.$api = api// add api to vue prototype

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
