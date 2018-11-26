import auth from '@/api/auth'

const state = {
    //用户信息，包括id，注册名，头像...
    user: null,
    //是否登录
    isLogin: false
}

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    //更新用户数据
    setUser(state, payload) {
        state.user = payload.user
    },

    //更新用户登录状态
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }
}

const actions = {

    //用户登录
    async login({
        commit
    }, {
        username,
        password
    }) {
        let res = await auth.login({
            username,
            password
        })
        commit('setUser', {
            user: res.data
        })
        commit('setLogin', {
            isLogin: true
        })
        return res.data
    },

    //检测是否登录
    async checkLogin({
        commit,
        state
    }) {
        // 从现有状态——store数据看
        // 若已经登陆，直接返回true
        if (state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin', {
            isLogin: res.isLogin
        })

        //请求数据后，若当前没有登陆，返回false
        if (!res.isLogin) return false
        //若当前已登陆，更新数据并返回true
        commit('setUser', {
            user: res.data
        })
        return true
    },

    //注册
    async register({
        commit
    }, {
        username,
        password
    }) {
        let res = await auth.register({
            username,
            password
        })
        commit('setUser', {
            user: res.data
        })
        commit('setLogin', {
            isLogin: true
        })
        return res.data //(*)
    },

    //注销
    async logout({
        commit
    }) {
        await auth.logout()
        commit('setLogin', {
            isLogin: false
        })
        commit('setUser', {
            user: null
        })
    },
}

// 导出
export default {
    state,
    getters,
    mutations,
    actions,
}
