/**
  * @param {string} url
  * @returns {Object}
  */
const param2Obj = function(url) {
  // 获取链接请求参数并替换掉加号
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, '')
  if (!search) {
    return {}
  }
  const obj = {}
  // 根据&符号分割成数组
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    // 根据每一个包含等号的位置来区分请求的名称和参数
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export { param2Obj }
