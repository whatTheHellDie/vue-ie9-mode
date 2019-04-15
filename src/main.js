// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/'
import httpRequest from './utils/httpRequest' // api: https://github.com/axios/axios
Vue.config.productionTip = false
import './assets/scss/main.scss'
/* eslint-disable no-new */
Vue.prototype.$http = httpRequest // ajax请求方法



new Vue({
  el: '#app',
  router,
   store,
  components: { App },
  template: '<App/>'
})
