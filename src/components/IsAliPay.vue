<template>
  <div class="is_alipay">
    
  </div>
</template>

<script>
export const isWeiXin = () => {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    const ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}

export const isAliPay = () => {
    // 是否在支付宝打开
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/Alipay/i) == 'alipay';
}
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
      alert(window.navigator.userAgent.toLowerCase())
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>