<template>
  <div class="home">
    <a href="http://note.youdao.com/s/FyIxiORt" >
      <el-button size="mini" type="primary" round plain>学习笔记</el-button>
    </a>
    <a href="http://note.youdao.com/s/FyIxiORt" >
      <el-button size="mini" type="primary" round plain>手动封装个分页组件</el-button>
    </a>
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
        'distanceformatting':'距离格式化,手机格式化',
        'movablearea':'小程序实现悬浮球(能拖动)',
        'isalipay':'判断是支付宝还是微信支付,生成小程序码'
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
