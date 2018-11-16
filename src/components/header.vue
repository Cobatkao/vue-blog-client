<template>
  <header :class="{'Login': isLogin, 'noLogin': !isLogin}">
    <!--未登录-->
    <template v-if="!isLogin">
      <h1>Let's Share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <!--已登录-->
    <template v-if="isLogin">
        <h1>Let's Share</h1>
        <i class="edit el-icon-edit-outline"></i>
        <div class="user">
          <img class="avatar" :src="user.avatar" alt="user.username" :title="user.username">
          <ul>
            <li><router-link to="my">我的主页</router-link></li>
            <li><a href="#" @click="onLogout">注销登录</a></li>
          </ul>
        </div>
    </template> 
  </header>
</template>

<script>
  import auth from '@/api/auth'
  window.auth = auth
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {                                                                             
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
        this.logout()
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

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin: 20px 5px 0;
  }
}

header.Login {
  display: flex;
  align-items: center;
  background: @bgColor;

  h1 {
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
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
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;

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
}
</style>
