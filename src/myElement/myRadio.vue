<template>
  <div class="my_radio" @click="xxxx">
    <span></span>
    <input type="radio" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "myRadio",
  props:{
    gutter:Number,//间隔
  },
  methods:{
    xxxx(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../utils/element.scss";
</style>
