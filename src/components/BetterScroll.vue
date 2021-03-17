<template>
  <div class="box">
    <betterScroll 
    class="wrapper"
    :data="list"
    :pulldown="true"
		:pullup="true"
		:click="true"
    @pulldown="pulldown"
		@pullup="pullup">
      <div class="content">
        <div class="li" v-for="(item,index) in list" :key="index">{{item}}</div>
      </div>
    </betterScroll>
  </div>
</template>

<script>
import betterScroll from './betterScroll/index'
export default {
    name:'timer60',
    components:{
      betterScroll
    },
    data(){
      return {
        pageNo:1,
        pageSize:10,
        count:10,
        list:[1,2,3,4,5,6,7,8,9,10]
      }
    },
    mounted(){

    },
    methods:{
      pulldown(){
				// console.log('下拉')
				// this.list = [1,2,3,4,5,6,7,8,9,10];
        this.getList(true);
			},
			pullup(){
				console.log('上拉');
        //每天都有几千条数据
        this.pageNo++;
        this.getList();
      },
      //封装分页请求
      getList(flag){
        //第一页就不去校验什么 是否加载完毕
        //万一一页就加载完了
        if(flag){
          this.pageNo = 1;
        }else{
          if(this.list.length==this.count){
            return false
          }
        }
				// this.$toast.loading({
        //     duration: 0,
        //     forbidClick: true,
        //     message: '加载中...'
        // });
				let reqObj = {
					pageNo:this.pageNo,
					pageSize:this.pageSize,
					//keywords:this.keywords
				}
				APIpayFlowList(reqObj).then(async res => {
          if(res.resultCode === '0') {
            // this.$toast.clear();
            const data = res.resultData;

            this.count = data.totalSize;//总行数
            this.list = flag?(data.list||[]):this.list.concat(data.list);
          }
				})
			},
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  .li {
    text-align: center;
    height: 100px;
  }
}
</style>