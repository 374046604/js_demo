<template>
  <div class="my_col" :class="`${span>24?'my_col_24':'my_col_'+span}`">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "myCol",
  props:{
    span:Number,//占有的分数 总分数24
  }
};
</script>

<style lang="scss" scoped>
// @import "../utils/element.scss";
</style>
