import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vant.js'
import {Post,Get} from './utils/api'

import './utils/common.css'

Vue.config.productionTip = false

//定义全局变量
Vue.prototype.$Post=Post;
Vue.prototype.$Get=Get;
// Vue.prototype.$PATCH=PATCH;
// Vue.prototype.$PUT=PUT;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
