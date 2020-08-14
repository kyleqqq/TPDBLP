import req from '@/utils/request'

export default {
  // login
  login: function(data) {
    return req({
      url: '/user/login',
      mothod: 'post',
      data
    })
  },

  // get info
  info: function(token) {
    return req({
      url: '/user/info',
      mothod: 'get',
      params: { token }
    })
  },

  // logout
  logout: function() {
    return req({
      url: '/user/logout',
      mothod: 'post'
    })
  }
}
