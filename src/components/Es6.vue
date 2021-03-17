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
		// https://juejin.cn/post/6844904184962105357
		// https://juejin.cn/post/6844904184962105357
		// https://juejin.cn/post/6844904184962105357



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
		// {
		// 	let aa = 100;
		// 	console.log(aa);
		// }

		// 005 
		// if(false){
		// 	var a = 1;
		// 	let b = 2;
		// }
		// console.log(a);
		// console.log(b);

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

		// 007
		// var a = 10;  
		// function test() {  
		// 	a = 100;  
		// 	console.log(a);  
		// 	console.log(this.a);  
		// 	var a;  
		// 	console.log(a); 
		// }
		// test();
		
		
		// 输出
		// 100
		// 10
		// 100

		// test()为函数独立调用,作用域中的this绑定为全局对象window。
		// test函数执行时,var a被提升到了作用域顶部,因此函数作用域中存在一个变量a。所以在函数中访问的a都是局部作用域中的a。

		// 008
		// if (!('a' in window)) {
		// 	var a = 1;
		// }
		// console.log(a);
		// //转换后
		// var a;
		// if (!('a' in window)) {
		// 	//不执行
		// 	a = 1;
		// }
		// console.log(a);

		//if 不是函数作用域,所以变量提升;
		//a in b 类似于判断 a属性是否在b对象中

		//009
		var a = 1;
		function c(a, b) {
			console.log(a);
			a = 2;
			console.log(a);
		}
		c();
		
		//个人理解
		//函数内的a 相当于创建了副本 var a = 传过来的a;
		//结果 1 2

		//正确结果
		//变量提升顺序： 函数>变量 
		//undefined  2
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>