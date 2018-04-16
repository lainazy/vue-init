// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import router from './router';
{{#if vuex}}
import store from './store';
{{/if}}

import './utils/directives';
import './utils/filters';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if vuex}}
  store,
  {{/if}}
  render: h => h(App),
});
