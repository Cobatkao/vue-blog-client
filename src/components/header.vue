<template>
  <header :class="{'Login': isLogin, 'noLogin': !isLogin}">
    <!--未登录-->
    <template v-if="!isLogin">
      <h1>Let's Share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <!--已登录-->
    <template v-if="isLogin">
        <h1>Let's Share</h1>
        <i class="edit el-icon-edit-outline"></i>
        <img class="avatar" src="http://pi0e6bg21.bkt.clouddn.com/6d41b79c5fad9f2361bc1e12c4990699_hd.jpg" alt="avatar">
    </template> 
  </header>
</template>

<script>
  export default {
    data () {
      return {
        isLogin: false,
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
}
</style>
