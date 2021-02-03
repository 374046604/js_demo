<template>
  <div class="box">
    
  </div>
</template>

<script>
import betterScroll from './betterScroll/index'
export default {
    name:'es6',
    components:{
    },
    data(){
      return {
      }
    },
    mounted(){
			//001暂时性死区: let const 在声明前调用,都会报错
			//002变量提升只会提升到最近的函数作用域
			//转译前
			// var tmp = new Date();
			// function f() {
			// 	console.log(tmp);
			// 	if (false) {
			// 		var tmp = 'hello world';
			// 	}
			// }
			// f(); // undefined

			//转译后
			var tmp = new Date();
			function f() {
				var tem ;
				console.log(tmp);
				if (false) {
					tmp = 'hello world';
				}
			}
			f();
			//003块级作用域 简单理 不同层{}不会相互影响
			//004块级作用域 替换匿名函数自执行
			{
				let aa = 100;
				console.log(aa);
			}
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>