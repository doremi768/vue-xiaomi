<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'app',
  components:{

  },
  data() {
    return {
      res:{}
    };
  },
  mounted(){
    this.getUser();
    this.getCartCount();
    //本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res;
    // });
    //通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // })
    //本地集成mockjs实现数据mock
    //  this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // });
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        //to-do保存到vuex里面
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(() => {
        //to-do 保存到vuex里面
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';

</style>