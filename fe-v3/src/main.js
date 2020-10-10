import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'

import './styles/index.scss'
import 'ant-design-vue/dist/antd.less'

createApp(App).use(Antd).use(router).mount('#app')

// Note: on Server Side, you need to manually push the initial location
// router.isReady().then(() => app.mount('#app'))
