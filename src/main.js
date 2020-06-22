import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vueRouter from 'vue-router'
Vue.config.productionTip = false

new Vue({
  store,
  vueRouter,
  render: h => h(App)
}).$mount('#app')
