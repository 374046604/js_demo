<template>
  <div class="my_component">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <slot></slot>
      </van-list>
      <!-- <mk-default v-if="list.length === 0" type="order" text="暂无申请" top="180"></mk-default> -->
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name:'my_component',
  //v-model 的特点写法
  //v-model 是个语法语法糖 v-bind v-click,我们要 设置绑定的变量,也就是下面的2个list,必须相同
  //怎么解释呢？就是v-model 包含了绑定和监听 现在我们要自定义,就要制定特定的变量 存我们的数据
  props:["list"],
  model:{
    //绑定的变量
    prop: 'list',
    //修改list数据的这个事件名可以随意写，它实际上是规定了子组件要更新父组件值需要注册的方法
    event: 'ababab'
  },
  data(){
    return {
      finished: false,//加载全部
      refreshing:false,//下拉刷新中
      loading: false,//上拉加载中
      show:false,//弹出框
      pageNo:1,
      pageSize:10
    }
  },
  created(){
    console.log(this.list)
  },
  mounted(){

  },
  methods:{
    //上拉加载
    onLoad() {
      setTimeout(() => {
        console.log('上拉加载');
        // if (this.refreshing) {
        //   this.list = [];
        //   this.refreshing = false;
        // }

        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        this.loading = false;

        // if (this.list.length >= 140) {
        //   this.finished = true;
        // }
      }, 1000);
    },
    //下拉刷新
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>

<style lang="scss" scoped>

</style>