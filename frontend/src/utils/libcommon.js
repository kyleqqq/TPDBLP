import Moment from 'moment'
// 工具类
export default {
  /**
  * @param {string} url
  * @returns {Object}
  */
  param2Obj: function(url) {
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
  },
  // 往storage内存入对象
  setStorage: function(key, obt) {
    localStorage.setItem(key, JSON.stringify(obt))
  },
  // 从storage内取出对象
  getStorage: function(key) {
    return JSON.parse(localStorage.getItem(key))
  },

  // 将首字母转成大写
  convertToCamelCase(str) {
    return str[0].toUpperCase() + str.substring(1)
  },
  // 将首字母转成小写
  toLowerCase(str) {
    return str ? str[0].toLowerCase() + str.substring(1) : ''
  },
  // 将二进制转换成base64
  arrayBufferToBase64(raw) {
    let base64 = ''
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    const bytes = new Uint8Array(raw)
    const byteLength = bytes.byteLength
    const byteRemainder = byteLength % 3
    const mainLength = byteLength - byteRemainder
    let a, b, c, d
    let chunk
    // Main loop deals with bytes in chunks of 3
    for (let i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12 // 258048 = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6 // 4032 = (2^6 - 1) << 6
      d = chunk & 63 // 63 = 2^6 - 1
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
      chunk = bytes[mainLength]
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2;
      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4 // 3 = 2^2 - 1;
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder === 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
      a = (chunk & 16128) >> 8 // 16128 = (2^6 - 1) << 8;
      b = (chunk & 1008) >> 4 // 1008 = (2^6 - 1) << 4;
      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2 // 15 = 2^4 - 1;
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    return 'data:image/jpeg;base64,' + base64
  },
  // 将字符串黏贴到黏贴版
  copyToClipboard(text) {
    // 数字没有 .length 不能执行selectText 需要转化成字符串
    const textString = text.toString()
    let input = document.querySelector('#copy-input')
    if (!input) {
      input = document.createElement('input')
      input.id = 'copy-input'
      input.readOnly = 'readOnly' // 防止ios聚焦触发键盘事件
      input.style.position = 'absolute'
      input.style.left = '-1000px'
      input.style.zIndex = '-1000'
      document.body.appendChild(input)
    }
    input.value = textString
    // ios必须先选中文字且不支持 input.select();
    selectText(input, 0, textString.length)
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      // alert('已复制到粘贴板');
    } else {
      // console.log('不兼容');
    }
    input.blur()

    // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
    // 选择文本。createTextRange(setSelectionRange)是input方法
    function selectText(textbox, startIndex, stopIndex) {
      if (textbox.createTextRange) { // ie
        const range = textbox.createTextRange()
        range.collapse(true)
        range.moveStart('character', startIndex)// 起始光标
        range.moveEnd('character', stopIndex - startIndex)// 结束光标
        range.select()// 不兼容苹果
      } else { // firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex)
        textbox.focus()
      }
    }
  },
  // 将数据集合内的数组处理成字符串
  tranArrtoStr(s) {
    const obj = Object.assign({}, s)
    Object.keys(obj).forEach(x => {
      if (Array.isArray(obj[x])) {
        if (obj[x].length === 0) {
          delete obj[x]
        } else {
          obj[x] = obj[x].toString()
        }
      }
    })
    return obj
  },
  // 将数据集合内的字符串处理成数组
  tranStrtoArr(s) {
    const obj = Object.assign({}, s)
    Object.keys(obj).forEach(x => {
      if (typeof obj[x] === 'string' && obj[x].indexOf(',') !== -1) {
        obj[x] = obj[x].split(',')
      }
    })
    return obj
  },
  // 比较对象是否有变动
  compareObjChange(original, now) {
    let rFlag = false
    for (const key in now) {
      if (now[key] !== original[key]) rFlag = true
    }
    return rFlag
  },
  // 重设vue原型
  resetStore(k, v) {
    const protoObj = Object.getPrototypeOf(Object.getPrototypeOf(this))
    protoObj[k] = v
  },
  // 通过天数获取时间范围(字符串)
  getTimeRangeByDays(days) {
    const end = new Date()
    const start = new Date()
    if (days > 1) {
      start.setTime(start.getTime() - 3600 * 1000 * 24 * (days - 1))
    }
    const start1 = Moment(start).format('YYYY-MM-DD 00:00:00')
    const end1 = Moment(end).format('YYYY-MM-DD 23:59:59')
    return [start1, end1]
  },
  getAllRangeDays() {
    const end = new Date()
    const start = new Date()
    start.setTime(start.getYear())
    const start1 = Moment(start).format('YYYY-MM-DD 00:00:00')
    const end1 = Moment(end).format('YYYY-MM-DD 23:59:59')
    return [start1, end1]
  },
  // 通过天数获取时间范围(日期)
  getDateByDate() {
    const end = new Date()
    const start = new Date()
    start.setTime(start.getYear())
    return [start, end]
  },

  getDateByDays(days) {
    const end = new Date()
    const start = new Date()
    if (days > 1) {
      start.setTime(start.getTime() - 3600 * 1000 * 24 * (days - 1))
    }
    return [start, end]
  },
  // 时间范围转换为字符串
  dateRangeToString(range) {
    if (!range || range.length !== 2) return ''
    return Moment(range[0]).format('YYYY-MM-DD') + '~' + Moment(range[1]).format('YYYY-MM-DD')
  },
  // 获取当前时间根据格式
  getNowTime(f) {
    let fmt = f || 'yyyy-MM-dd hh:mm:ss'
    const date = new Date()
    // let timestamp = (new Date()).getTime();
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },
  // 日期转换为字符串
  dateFormat(o, fmt = 'yyyy-MM-dd hh:mm:ss') {
    const date = new Date()

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },

  // 防抖
  debounce(func, wait = 50) {
    let timer = null
    return function(...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  },
  // 节流
  throttle(fn, wait = 50) {
    let inThrottle, lastFn, lastTime
    return function() {
      const context = this; const args = arguments
      if (!inThrottle) {
        fn.apply(context, args)
        lastTime = Date.now()
        inThrottle = true
      } else {
        clearTimeout(lastFn)
        lastFn = setTimeout(function() {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args)
            lastTime = Date.now()
          }
        }, wait - (Date.now() - lastTime))
      }
    }
  },

  // 获取长度
  getSize(val) {
    return Array.isArray(val)
      ? val.length
      : val && typeof val === 'object'
        ? val.size || val.length || Object.keys(val).length
        : typeof val === 'string'
          ? new Blob([val]).size
          : 0
  },
  // 提取html 内容
  stripHTMLTags(str) {
    str.replace(/<[^>]*>/g, '')
  },
  // 生成uuid
  uuid() {
    let d = new Date().getTime()
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
    })
    return uuid
  },

  // 阻止失焦
  proventBlur(e) {
    e.preventDefault()
  }

}
