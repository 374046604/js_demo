<template>
  <div class="my_radio mar_r_10" @click="radioClick">
    <div>
      <!-- 模拟数据-->
      <span :class="`my_radio_span ${label==value?'is_checked':''}`"></span>
      <input type="radio" class="my_input"/>
      <span class="mar_l_10">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
//label是选中时候最终传递的值，v-model控制是否选中
//工作原理：每次点击的时候将label的值赋值给v-model，v-model的绑定相同的对象 是唯一的，就能实现单选的效果 
export default {
  name: "myRadio",
  model:{
    prop: 'value',
    event: 'input'
  },
  props:{
    value:{},//传进来的值
    label:{},//最后要到表单的值
    disabled:Boolean
  },
  data(){
    return {
      
    }
  },
  methods:{
    radioClick(){
      this.$emit('input',this.label)
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../utils/element.scss";
</style>
