// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// Vue.prototype.$axios = axios
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import '@/common/css/reset.css'
import '@/common/font/icon.css'
import '@/common/js/rem.js'
//axios请求组件
import requests from '@/common/js/axios.js'
Vue.prototype.rq = requests  // 此处命名为rq,你可以改


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
