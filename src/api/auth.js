//封装认证相关api的底层数据

import request from '@/helpers/request.js'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  GET_INFO: '/auth',
  LOGOUT: '/auth/logout'
}

export default {
  register({username, password}) {
    return request(URL.REGISTER, 'post', {username, password})
  },
  login({username, password}) {
    return request(URL.LOGIN, 'post', {username, password})
  },
  getInfo() {
    return request(URL.GET_INFO)
  },
  LOGOUT() {
    return request(URL.LOGOUT)
  }
}
