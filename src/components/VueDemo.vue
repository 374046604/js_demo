<template>
  <div class="vue_demo">
    <div>参考文档<a href="https://juejin.cn/post/6943534547501858824">『前端工程』—— 封装Vue第三方组件的三板斧</a></div>
	<div>$attrs 这样就可以传递属性进入组件</div>
	<div>$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件。</div>
	<div>最后调用封装的组件的函数this.$refs.myInput.elInput.focus();</div>
	<div>
		<el-input v-model="input" v-bind="$attrs" v-on="$listeners" ref="elInput">
			<template #prepend>
				<slot name="prepend"></slot>
			</template>
		</el-input>
	</div>

  </div>
</template>

<script>
export default {
	name:'vue_demo',
	inheritAttrs: false,//简单来说，把inheritAttrs设置为false，避免给myInput组件设置的属性被添加到myInput组件的根元素div上。
    components:{
    },
    data(){
      return {
		input:''
      }
    },
	mounted(){
		this.elInput = this.$refs.elInput;//将实例挂在到elInput

	},
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>