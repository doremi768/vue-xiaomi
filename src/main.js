import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
// import env from './env'

//mock开关
const mock = true;
if(mock){
  require('./mock/api');
}

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;


//根据环境变量获取不同的请求地址
//接口错误拦截
axios.interceptors.response.use(response => {
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  } else if(res.status == 10){
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})


Vue.use(VueAxios,axios)//加载插件
Vue.config.productionTip = false



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
