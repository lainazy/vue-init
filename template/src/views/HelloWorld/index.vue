<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h1>{{ msg }} - {{ increment }}</h1> -->
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div @click="click" style="position: relative;z-index:10000">测试</div>
  </div>
</template>

<script>
  import {
    showLoading,
    hideLoading,
    showToast,
    showAlert,
    showConfirm,
    showPrompt,
    showNotify,
  } from '@/mixins';
  // import {
  //   Loading,
  //   Toast,
  // } from '@/components/commons';
  import {
    mapGetters,
    mapMutations,
    // mapActions,
  } from 'vuex';

  export default {
    name: 'HelloWorld',
    mixins: [showLoading, hideLoading, showToast, showAlert, showConfirm, showPrompt, showNotify],
    data() {
      return {
        show: false,
        msg: 'Welcome to Your Vue.js App',
      };
    },
    computed: {
      ...mapGetters(['increment']),
    },
    methods: {
      ...mapMutations(['setIncrement']),
      // ...mapActions(['setIncrement']),
      click() {
        // this.show = !this.show;
        // setTimeout(() => {
        //   this.show = true;
        // }, 1500);
        // this.showPrompt('提示内容', '提示', res => {
        //   console.log(res);
        // });
        // this.showToast('提示内容', 'top', 'success');
        // if (this.show) {
        //   this.hideLoading();
        // } else {
        //   this.showLoading();
        // }
        // this.show = !this.show;
        // this.showNotify('提示');
        this.setIncrement(this.increment + 1);
      },
    },
    // components: {
    //   Loading,
    //   Toast,
    // },
    // created() {
    //   const url = `${$api.login}/123`;
    //   $axios
    //     .get(url)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
