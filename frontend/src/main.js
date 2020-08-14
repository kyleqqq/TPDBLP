import Vue from 'vue'

import 'normalize.css/normalize.css'// CSS resets
import 'animate.css'// animate css
import '@/styles/index.scss'// global CSS

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons'// icon
import '@/utils/regcomponents'// register common components

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
