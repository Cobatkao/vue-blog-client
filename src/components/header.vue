<template>
    <header :class="{'Login': isLogin, 'noLogin': !isLogin}">
        <!--未登录-->
        <template v-if="!isLogin">
            <h1>Let's Share</h1>
            <p>Did you get what you wanted this life :)</p>
            <div class="btns">
                <router-link to="/login">
                    <el-button>立即登录</el-button>
                </router-link>
                <router-link to="/register">
                    <el-button>注册账号</el-button>
                </router-link>
            </div>
        </template>
        <!--已登录-->
        <template v-if="isLogin">
            <div class="lt">
                <router-link to="/">
                    <h1>Let's Share</h1>
                </router-link>
            </div>
            <div class="rt">
                <router-link to="/create">
                    <i class="edit el-icon-edit-outline"></i>
                </router-link>
                <div class="user">
                    <img class="avatar" :src="user.avatar" alt="user.username" :title="user.username">
                    <ul>
                        <li>
                            <router-link to="my">我的主页</router-link>
                        </li>
                        <li><a href="#" @click="onLogout">注销登录</a></li>
                    </ul>
                </div>
            </div>
        </template>
    </header>
</template>

<script>
    import auth from '@/api/auth'
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['isLogin', 'user'])
        },
        created() {
            this.checkLogin()
        },
        methods: {
            ...mapActions(['checkLogin', 'logout']),

            onLogout() {
                this.logout().then(() => {
                    this.$router.push({
                        path: '/'
                    })
                })
            }
        }
    }

</script>

<style lang="less">
    @import '../assets/base.less';

    header.noLogin {
        padding: 0 12% 30px 12%;
        background: @bgColor;
        display: grid;
        justify-items: center;
        box-shadow: 0 5px 4px -4px black;

        h1 {
            font-size: 64px;
            margin: 100px 0 0 0;
            text-transform: uppercase;
            color: #fff;
        }

        p {
            font-size: 20px;
            margin: 15px 0 15px 0;
            color: #fff;
        }

        .btns {
            margin: 10px 0;

            &>a:nth-child(1) {
                margin-right: 5px;
            }

            &>a:nth-child(2) {
                margin-left: 5px;
            }

        }
    }

    header.Login {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: @bgColor;
        box-shadow: 0 5px 4px -4px black;

        .lt>a>h1 {
            color: #fff;
            font-size: 40px;
            text-transform: uppercase;
            flex: 1;
        }

        .rt {
            display: flex;
            align-items: center;
        }

        .edit {
            color: #fff;
            font-size: 42px;
        }

        .avatar {
            width: 40px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 50%;
            margin-left: 15px;
        }

        .user {
            position: relative;
            display: flex;
            align-items: center;
            padding-bottom: 9px;
            padding-top: 9px;

            ul {
                display: none;
                position: absolute;
                right: 0;
                top: 60px;
                list-style: none;
                margin: 0;
                padding: 0;
                background-color: #dedfe1;
                box-shadow: 0 0 1px 1px #dedfe1;
                border-radius: 2px;

                &::before {
                    content: '';
                    color: #333;
                    position: absolute;
                    right: 11px;
                    top: -9px;
                    height: 0;
                    width: 0;
                    border-bottom: 10px solid #dedfe1;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    z-index: 1;
                }

                li:first-child {
                    border-bottom: 1px solid #eaeaea;
                }

                a {
                    text-decoration: none;
                    color: #333;
                    font-size: 12px;
                    display: block;
                    padding: 5px 10px;
                    white-space: nowrap;

                    &:hover {
                        background: #fff;
                    }
                }
            }

            &:hover ul {
                display: block;
            }

        }
    }

</style>
