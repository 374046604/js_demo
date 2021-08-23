<template>
  <div class="box">
    <div id="container"></div>
  </div>
</template>

<script>
import betterScroll from './betterScroll/index'
export default {
    name:'utils',
    components:{
    },
    data(){
      return {
      }
    },
    mounted(){
      var count = 1;
      var container = document.getElementById('container');

      function getUserAction() {
        console.log(new Date().getTime())
        // container.innerHTML = count++;
      };

      container.onmousemove = debounce(getUserAction,1000,true)
      function debounce(func, wait) {
        var timeout;
        return function () {
          var context = this;
          clearTimeout(timeout)
          timeout = setTimeout(function(){
            func.apply(context)
          }, wait);
        }
      }

      //手写promise
      class Pro{
        constructor(callback){
          this.status = 'loading';
          this.value = null;

          this.onOkList = [];//成功的订阅队列
          this.onOffList = [];//失败的订阅
          let ok = (value) => {
            if(this.status!='loading'){
              return false;
            }
            this.status ='ok';
            this.value = value;
            console.log('执行了成功返回',value);
            this.onOkList.forEach(fn=>fn());
          }
          let off = (value) => {
            if(this.status!='loading'){
              return false;
            }
            this.status = 'off';
            this.value = value;
            this.onOffList.forEach(fn=>fn());
          }
          // 如果executor执行报错，直接执行reject
          try{
            callback(ok,off)
          } catch (err) {
            off(err);
          }
        }
        then(thenOk,thenOff){
          if(this.status=='loading')return false;
          if(this.status=='ok'){
            thenOk(this.value)
          } else if(this.status=='off'){
            thenOff(this.value);
          } else {
            //当前存在一个问题 就是异步后只会执行 ok off方法 ，then方法早执行完了，这就很头大，利用订阅模式
            //当前添加订阅
            this.onOkList.push(()=>{
              thenOk(this.value)
            })
            this.onOffList.push(()=>{
              thenOff(this.value)
            })
          }
        }
      }
      let aa = new Pro((ok,off)=>{
        setTimeout(() => {
          ok('成功结果')
        }, 1000);
      });
      aa.then((value)=>{
        console.log('成功的结果',value)
      },(value)=>{
        console.log(value)
      })
    },
    methods:{
      //防抖 第一版
      debounce(fn,time){
        let timer = null
        return function(){
          clearTimeout(timer);
          setTimeout(fn, time);
        }
      }
    }
}
</script>

<style lang="scss" scoped>
#container {
	width: 100%;
	height: 400px;
	background: #bfbfbf;
}
</style>