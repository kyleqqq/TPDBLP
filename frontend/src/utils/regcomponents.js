import Vue from 'vue'
// 获取通用组件
const reqComponents = require.context(
    '../components/common',
    true,
    /\.vue$/
)
// 遍历每个组件的路径
reqComponents.keys().forEach(fileName => {
    // 组件实例
    const thisCom = reqComponents(fileName)
    // 组件名
    const thisComName = (fileName.split('/')[1]).replace('.vue', '')
    // 挂载组件
    Vue.component(thisComName, thisCom.default || thisCom)
})
