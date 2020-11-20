<template>
  <div class="timer60">
    <el-button size="mini" type="primary" round plain v-if="nowType==1" @click="getCode">获取验证码</el-button>
    <el-button size="mini" type="primary" round plain v-if="nowType==2">{{nowTime}}</el-button>
  </div>
</template>

<script>
export default {
    name:'timer60',
    data(){
      return {
        nowType:1,//当前状态 1 获取验证码 2 倒计时
        nowTime:60,//倒计时时间
        theTimer:null,//定时器
      }
    },
    mounted(){

    },
    methods:{
      //获取验证码
      getCode(){
        this.nowType = 2;
        if(this.theTimer){
          clearInterval(this.theTimer);
        }
        let theTimer = setInterval(() => {
          this.nowTime = this.nowTime - 1;
          console.log(this.nowTime)
          if(this.nowTime<1){
            this.nowType = 1;
            this.nowTime = 60;
            clearInterval(theTimer);
          }
        }, 1000);
        this.theTimer = theTimer;
      }
    }
};
</script>

<style lang="scss" scoped>
</style>