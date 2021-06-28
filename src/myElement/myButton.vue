<template>
  <button class="my_button" 
  @click="buttonClick"
  :class="[type?'my_button_'+type:'',plain?'is_plain':'',round?'is_round':'',disabled?'is_disabled':'',circle?'is_circle':'']">
    <i v-if="icon" :class="icon" class="icon"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "myButton",
  // model: {
  //   prop: "value",
  //   event: "change",
  // },
  props: {
    type: String, //类型
    round:Boolean,//是否圆角
    disabled:Boolean,//是否禁用
    circle:Boolean,//是否是圆形按钮
    plain: {
      //是否简朴显示
      type: Boolean,
      default: false,
    },
    icon:String,//图标
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    buttonClick(event){
      this.$emit('click', event);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
