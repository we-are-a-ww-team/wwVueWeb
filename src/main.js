import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/clearn.css' /* 清除原生样式*/
import './assets/css/footer.css'
import './assets/css/swiper.min.css'
import './assets/css/webinfo.css'
import './assets/css/webinfo-vv.css'
import Antd from 'ant-design-vue'
import 'lib-flexible'
import 'ant-design-vue/dist/antd.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Antd)
// Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
