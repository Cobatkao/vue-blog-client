import request from '@/helpers/request'

// 全局对象，方便console调试
window.request = request

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    onClick1 () {
      this.$alert('点击打开弹窗', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message.success('已经点击了确定按钮！')
        }
      });
    },

    onClick2 () {
      this.$message.error('错了哦，这是一条错误消息');
    }
  }
}