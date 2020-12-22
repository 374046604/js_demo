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
import axios from 'axios'
export default {
  name:'my_component',
  //v-model 的特点写法
  //v-model 是个语法语法糖 v-bind v-click,我们要 设置绑定的变量,也就是下面的2个list,必须相同
  //怎么解释呢？就是v-model 包含了绑定和监听 现在我们要自定义,就要制定特定的变量 存我们的数据
  props:["list","apiUrl"],
  model:{
    //绑定的变量
    prop: 'list',
    //修改list数据的这个事件名可以随意写，它实际上是规定了子组件要更新父组件值需要注册的方法
    event: 'listChange'
  },
  data(){
    return {
      finished: false,//加载全部
      refreshing:false,//下拉刷新中
      loading: false,//上拉加载中
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
      let {pageNo,pageSize} = this;
      axios.post(this.apiUrl,
        {
          pageNo,
          pageSize,
          promotionTypes: [2],
          selfSupport: false,
        },
        {
          headers: {
            Authorization: "Basic",
            client_source: 4293,
            platform_id: 6,
            biz_code: 1,
          },
        }
      )
      .then((_res) => {
        let res = _res.data;
        if (res.resultCode === '0') {
					if(res.resultData.list.length>0){
            let list =res.resultData.list;
						this.$emit('listChange',this.pageNo>1?[...this.list,...list]:list);
						this.pageNo += 1;
						this.loading = false;
						this.refreshing = false;
					} else {
						this.finished = true;
						this.loading = false;
						this.refreshing = false;
					}
				}
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    //下拉刷新
		onRefresh(){
			console.log('下拉刷新')
			this.pageNo = 1;
			this.onLoad();
    }
  }
};
</script>

<style lang="scss" scoped>

</style>