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
        list:[1,2,3,4,5,6,7,8,9,10]
      }
    },
    mounted(){

    },
    methods:{
      pulldown(){
				console.log('下拉')
				this.list = [1,2,3,4,5,6,7,8,9,10];
			},
			pullup(){
				console.log('上拉');
        //每天都有几千条数据
        let list = []
        this.list = [...this.list,...[1,2,3,4,5,6,7,8,9,10]]
			}
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