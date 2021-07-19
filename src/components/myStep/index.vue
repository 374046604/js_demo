<template>
  <div class="step_box">
    <div @click="jianStep">-</div>
    <div class="step_number">{{ stepNumber||0 }}</div>
    <div @click="jiaStep">+</div>
  </div>
</template>

<script>
export default {
  name: "myStep",
	model: {
		prop: 'stepNumber',
		event: 'changeNumber'
	},
	props:{
		stepNumber:{
			type:Number,
			default:0
		},
		jiaFun:Function,//增加回调
		jianFun:Function,//减少回调
	},
  data() {
    return {};
  },
  mounted() {},
	methods: {
		jianStep(){
			let stepNumber = Number(JSON.parse(JSON.stringify(this.stepNumber)))-1;
			if(stepNumber<=-1) {
				return false;
			}
			this.$emit('changeNumber',stepNumber)
			this.jianFun()
		},
		jiaStep(){
			let stepNumber = Number(JSON.parse(JSON.stringify(this.stepNumber)))+1;
			this.$emit('changeNumber',stepNumber)
			this.jiaFun()
		}
	},
};
</script>

<style scoped>
.step_box {
  display: flex;
  align-items: center;
	line-height: 100%;
}
.step_box>div {
	width: 20px;
	height: 20px;
	line-height: 20px;
	text-align: center;
}
.step_box .step_number {
	width: 50px;
}
</style>