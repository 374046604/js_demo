<template>
  <div class="my_component_box">
    <div class="font_20">父组件提供传递接口地址，子组件双向绑定数据list,控制数据的数量，父组件控制遍历循环的样式</div>
    <myComponent v-model="list">
      <div class="list_item pad_30 back_fff mar_b_20" v-for="item in list" :key="item">
        <div>
          <span class="font_600 color_333 font_36">{{item.totalAmount}}</span>
          <span class="font_400 color_red font_24" v-if="item.reviewStatus==0">审核中</span>
          <span class="font_400 color_red font_24" v-if="item.reviewStatus==1">已通过</span>
          <span class="font_400 color_red font_24" v-if="item.reviewStatus==2">已拒绝</span>
        </div>
        <div class="font_24 color_9a">申请时间：{{item.createTime}}</div>
      </div>
    </myComponent>
  </div>
</template>

<script>
import myComponent from './myComponent/index'
export default {
  name:'my_component_box',
  components:{
    myComponent
  },
  data(){
    return {
      nowType:1,//当前状态 1 获取验证码 2 倒计时
      nowTime:60,//倒计时时间
      theTimer:null,//定时器
      list:[1]
    }
  },
  mounted(){

  },
  methods:{

  }
};
</script>

<style lang="scss" scoped>
.my_component_box {
  width: 100vw;
  height: 100vh;
}
</style>