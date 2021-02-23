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
		// 005 
		if(false){
			var a = 1;
			let b = 2;
		}
		console.log(a);
		console.log(b);

		//结果  undefined  报错
		//分析  var纯在变量提升 即使没有执行 也会先声明 let是块级作用域 外部无法获取

		// 006
		var a = 1;
		if(true){
			console.log(a);
			let a = 2;
		}
		//结果报错
		//分析 间歇性死区:在let声明变量之前访问变量会抛出错误。 

		// https://juejin.cn/post/6844904184962105357
		// https://juejin.cn/post/6844904184962105357
		// https://juejin.cn/post/6844904184962105357

    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>