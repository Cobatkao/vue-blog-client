<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="输入文章标题..."></el-input>
    <p class="msg"><span>{{ computedTLen }}/100 | </span>限100个字</p>
    <h3>内容简介</h3>
    <el-input  v-model="description" type="textarea" :autosize="{ minRows: 2, maxRows: 10 }" placeholder="输入文章简介..."></el-input>
    <p class="msg"><span>{{ computedDLen }}/100 | </span>限100个字</p>
    <h3>文章内容</h3>
    <el-input v-model="content" type="textarea" :autosize="{ minRows: 2, maxRows: 30 }" rows="10" placeholder="输入文章内容..."></el-input>
    <p class="msg"><span>{{ computedCLen }}/10000 | </span>限10000个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <el-button type="success" @click="OnCreate">确定提交</el-button>
  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="../Edit/template.less"></style>