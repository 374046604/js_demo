<template>
  <div class="timer60">
    <el-button size="mini" type="primary" round plain>{{Number(distance)>1000?''+(((distance/1000)*100)/100).toFixed(2)+'km':''+Number(distance)+'m'}}</el-button>
    <el-input type="number" v-model="distance" size="mini"></el-input>
    <el-button size="mini" type="primary" round plain>{{setPhone(iphone)}}</el-button>
    <el-input type="number" v-model="iphone" size="mini" maxlength="11"></el-input>
  </div>
</template>

<script>
export default {
    name:'timer60',
    data(){
      return {
        distance:1100,
        iphone:15900844809
      }
    },
    mounted(){

    },
    methods:{
      //格式化电话
      setPhone(phone){
        if(String(phone).length==0){
          return '15900844809'
        }
        return ''+String(phone).slice(0,3)+' '+String(phone).slice(3,7)+' '+String(phone).slice(7);
      }
    }
};
</script>

<style lang="scss" scoped>
</style>