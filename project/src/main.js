import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import loading from '../public/loading.gif'

import './filters'

Vue.component(Button.name, Button)  // <mt-button>

Vue.config.productionTip = false

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
