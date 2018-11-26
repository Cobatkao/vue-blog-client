import {
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        ...mapActions(['login']),

        onLogin() {
            this.login({
                    username: this.username,
                    password: this.password
                })
                .then(() => {
                    // 跳至首页
                    console.log(`跳转至首页：${this.username},${this.password}`)
                    this.$router.push({
                        path: this.$route.query.redirect || '/'
                    })
                })
        },
    }
}
