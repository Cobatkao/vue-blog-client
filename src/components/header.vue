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
                            <router-link to="/my">我的主页</router-link>
                        </li>
                        <li>
                            <a href="#" to="`/user/${user.id}`">我的发布</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="onLogout">注销登录</a>
                        </li>
                    </ul>
                </div>
                <p v-if="isLogin">
                  {{ user.username }}
                </p>
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
        //在页面没有渲染之前检查用户是否登录
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
            },

            // toUserPage() {
            //     this.$router.push({
            //         path: 'user', params: {userId: this.user.id}
            //     })
            // }
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

            .edit {
            color: #fff;
            font-size: 42px;
        }

        

        .user {
            position: relative;
            display: flex;
            align-items: center;
            padding-bottom: 9px;
            padding-top: 9px;

            .avatar {
                width: 40px;
                height: 40px;
                border: 1px solid #fff;
                border-radius: 50%;
                margin-left: 15px;
            }

            ul {
                display: none;
                position: absolute;
                right: 0;
                top: 63px;
                list-style: none;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                box-shadow: 0 0 1px 1px #f5f5f5;
                border-radius: 2px;

                &::before {
                    content: '';
                    color: #333;
                    position: absolute;
                    right: 11px;
                    top: -12px;
                    height: 0;
                    width: 0;
                    border-bottom: 12px solid #f5f5f5;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    z-index: 1;
                    filter: drop-shadow(0 0 1px #f5f5f5);
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
                        background: #eaeaea;
                    }
                }
            }

            &:hover ul {
                display: block;
            }
          }

          p {
            color: #fff;
            margin-left: 10px;
            font-size: 24px;
          }
        }


    }

</style>
