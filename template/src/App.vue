<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  @import './assets/fonts/iconfont/iconfont.css';
  @import './assets/scss/app.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
