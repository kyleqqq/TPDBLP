import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

const errorCode = [
  500, // server error
  508, // illegal token
  514 // token expired
]

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.response.use(
  config => {
    // do sth before request is sent
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    // config.headers['X-Token'] = getToken() // 根据store是否存在token来决定是否头部携带token
    return config
  },
  error => {
    // do sth with request error condition
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // do sth with response
    const res = response.data
    // default success code is 20000, or you can use 200, all depends
    if (res.code !== 200) {
      // you can add some friend notice here

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (errorCode.includes(res.code)) {
        // do sth here, eg reload page
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // debug use
    console.log('err:' + error)

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })

    // you can add some friend notice here
    return Promise.reject(error)
  }
)

export default service
