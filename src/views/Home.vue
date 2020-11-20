<template>
  <div class="home">
    <router-link :to="item" v-for="(item,index) in componentDoms" :key="index">
      <el-button size="mini" type="primary" round plain>{{componentNames[item]}}</el-button>
    </router-link>
  </div>
</template>

<script>
import sss from '@/components/Timer60'
export default {
  name: "Home",
  data() {
    return {
      componentNames:{
        'timer60':'倒计时60秒',
        'timer120':'倒计时120秒'
      },
      componentDoms:''
    };
  },
  mounted() {
    //加载所有的组件
    let allComponents = require.context("../components", false, /\.vue/).keys();
    console.log(allComponents)
    this.componentDoms = allComponents.map((item,index)=>{
      item  = item.toLowerCase()
      item = item.slice(2,-4);
      return item;
    })
    console.log(this.componentDoms)
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 30px 50px;
  &>a {
    margin-right: 20px;
  }
}
</style>
