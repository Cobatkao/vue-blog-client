<template>
  <div id="app">
    <Header id="header"></Header>
    <Main id="main">
      <router-view/>
    </Main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>

//引入header，footer组件
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">

@import './assets/common.less';

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".      main   .     "
                       "footer footer footer";
  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }
  #main {
    grid-area: main;
  }
  #footer {
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;

    #header, #footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
