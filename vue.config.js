module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '公版图书典藏计划'
        return args
      })
  }
}
