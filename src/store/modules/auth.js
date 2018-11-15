import auth from '@/api/auth'

const state = {
  //用户信息
  user: null,
  //是否登陆
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser (state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {

  login({ commit }, { username, password}) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },

  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data //(*)
  },

  //注销
  async logout({ commit }) {
    await auth.logout()
    commit('setLogin', {isLogin: false})
    commit('setUser', {user: null})
  },

  async checkLogin({ commit, state }) {
    // 若没有登陆，把isLogin设为false
    if(state.isLogin) return true
    let res = await auth.getInfo()
    commit('setLogin', {isLogin: res.isLogin})

    //如果登陆了，把isLogin设为true，登陆信息写入
    if(!state.isLogin) return false
    commit('setUser', {user: res.data})
    return true
  }
}

// 导出
export default {
  state,
  getters,
  mutations,
  actions,
}