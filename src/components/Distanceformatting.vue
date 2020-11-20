<template>
  <div class="timer60">
    <el-button size="mini" type="primary" round plain>{{Number(distance)>1000?''+(((distance/1000)*100)/100).toFixed(2)+'km':''+Number(distance)+'m'}}</el-button>
    <el-input type="number" v-model="distance" size="mini"></el-input>
  </div>
</template>

<script>
export default {
    name:'timer60',
    data(){
      return {
        distance:1100
      }
    },
    mounted(){

    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>