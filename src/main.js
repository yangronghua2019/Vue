// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery/dist/jquery.min'
import '../src/assets/js/bootstrap.min.js'
import '../src/assets/css/bootstrap.min.css'

import './assets/icon/iconfont.css'
import echarts from 'echarts'

import 'lib-flexible/flexible'
import 'babel-polyfill'

Vue.config.productionTip = false;

//国际化
import i18n from './assets/languages/i18n'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
