<template>
  <div class="home">
    <a href="http://note.youdao.com/s/FyIxiORt" >
      <el-button size="mini" type="primary" round plain>学习笔记</el-button>
    </a>
    <router-link :to="item" v-for="(item,index) in componentDoms" :key="index">
      <el-button class="mar_b_20" size="mini" type="primary" round plain>{{componentNames[item]}}</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      componentNames:{
        'timer60':'倒计时60秒',
        'distanceformatting':'距离格式化,手机格式化',
        'movablearea':'小程序实现悬浮球(能拖动)',
        'isalipay':'判断是支付宝还是微信支付,生成小程序码',
        'mycomponent':'手动封装个分页组件,(感觉组件的逻辑还是要独立,不要和别的组件有关联)',
        'update':'图片上传',
        'postcss':'postcss移动端适配',
        'login':'封装登陆界面(开发中)',
        'canvascom':'画布',
        'betterscroll':'上拉加载，封装分页',
        'compressor':'图片压缩,日期格式化',
        'es6':'es6',
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
