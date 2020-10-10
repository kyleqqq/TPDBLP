import path from 'path'

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  cssPreprocessOptions: {
    // 重置 Antd 样式
    // @https://2x.antdv.com/docs/vue/customize-theme-cn/
    // 如果你是通过 'ant-design-vue/dist/antd.css' 引入样式的，改为 ant-design-vue/dist/antd.less -> main.js中
    less: {
      modifyVars: {
        'primary-color': '#aa873b',
        'border-radius-base': '4px'
      },
      javascriptEnabled: true
    }
  }
}