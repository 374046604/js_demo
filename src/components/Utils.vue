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
          let ok = function(value){
            if(this.status!='loading'){
              return false;
            }
            this.status ='ok';
          }
          let off = function(value){
            if(this.status!='loading'){
              return false;
            }
            this.status = 'off';
          }
          // 如果executor执行报错，直接执行reject
          try{
            callback(ok,off)
          } catch (err) {
            off(err);
          }
        }
        then = (thenOk,thenOff)=>{
          if(this.status=='loading')return false;
          if(this.status=='ok'){
            thenOk(this.value)
          } else if(this.status=='off'){
            thenOff(this.value);
          }
        }
      }
      let aa = new Pro()
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