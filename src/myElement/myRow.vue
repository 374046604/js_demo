<template>
  <div class="my_row" :class="`${gutter?'my_gutter_'+gutter:''}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "myRow",
  props:{
    gutter:Number,//间隔
  }
};
</script>

<style lang="scss" scoped>
// @import "../utils/element.scss";
</style>
