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
    //本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res;
    // });
    //通过easy-mock平台实现数据mock
  }
}
</script>