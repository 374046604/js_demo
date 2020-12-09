<template>
  <div class="home">
    <a href="http://note.youdao.com/s/FyIxiORt" >
      <el-button size="mini" type="primary" round plain>学习笔记</el-button>
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
    if(true){
      var aa =100;
      console.log(aa);
    }
    //函数作用域，这里是mounted(),不是之前理解的{}
    console.log(aa);
    if(true){
      let bb = 100;
      console.log(bb);
    }
    //let 块作用域就是附件
    // console.log(bb);


    let age = 30;
    console.log(age); // 30
    if (true) {
      console.log(age); // 26
      let age = 26;
    }
    for(var ii = 0;ii<10;ii++){
      (function(name){
        setTimeout(() => {
          console.log(name)
        }, 1000)
      })(ii)
    }
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
