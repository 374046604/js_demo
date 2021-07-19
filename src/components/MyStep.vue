<template>
  <my-step v-model="stepNumber" :jiaFun="testFun" :jianFun="testFun"></my-step>
</template>

<script>
import myStep from './myStep/index.vue'
export default {
    name:'testStep',
    data(){
      return {
        stepNumber:10
      }
    },
		components:{
			myStep
		},
    mounted(){

    },
    methods:{
			testFun() {
				console.log('执行父级传过来的函数,this指向父级')
			},
		}
};
</script>

<style lang="scss" scoped>
</style>