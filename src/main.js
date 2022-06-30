import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/reset.less'
import 'lib-flexible'
import '@vant/touch-emulator';//vant能够在桌面端使用

Vue.config.productionTip = false

import { Button, Row, Col} from 'vant'
Vue.use(Button).use(Row).use(Col)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
