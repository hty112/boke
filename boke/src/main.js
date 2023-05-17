import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import axiosInit from "@/util/axios-init";
import { Message,Radio,Input,Dialog,Button,Upload } from 'element-ui';
import {vueBaberrage} from "vue-baberrage"
import wow from 'wowjs'
import '@/plugins/vant'
import 'wowjs/css/libs/animate.css'

Vue.component(Radio.name,Radio)
Vue.component(Input.name,Input)
Vue.component(Dialog.name,Dialog)
Vue.component(Button.name,Button)
Vue.component(Upload.name,Upload)

Vue.prototype.$message = Message
Vue.prototype.$wow = wow
Vue.prototype.$axios = axiosInit
Vue.config.productionTip = false
Vue.use(vueBaberrage)

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
