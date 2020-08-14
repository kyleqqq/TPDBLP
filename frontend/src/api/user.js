import req from '@/utils/request'

// login
export function login(data) {
  return req({
    url: '/user/login',
    mothod: 'post',
    data
  })
}

// get info
export function info(token) {
  return req({
    url: '/user/info',
    mothod: 'get',
    params: { token }
  })
}

// logout
export function logout() {
  return req({
    url: '/user/logout',
    mothod: 'post'
  })
}
