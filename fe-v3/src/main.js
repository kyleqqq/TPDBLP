import { createApp } from 'vue'
import App from './App.vue'
// 暂时不用AntD
// import Antd from 'ant-design-vue'
import router from './router'

import './styles/index.scss'
// import 'ant-design-vue/dist/antd.less'

const app = createApp(App)
// app.use(Antd)
app.use(router)
app.mount('#app')

// Note: on Server Side, you need to manually push the initial location
// router.isReady().then(() => app.mount('#app'))
