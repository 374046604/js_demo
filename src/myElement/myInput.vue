<template>
  <div>
    <div class="my_input_box">
      <input
        v-if="type != 'textarea'"
        :type="
          showPassword ? (showPasswordVisible ? 'text' : 'password') : type
        "
        :class="`my_inner my_input ${disabled && 'is_disabled'}`"
        :disabled="disabled"
        :value="value"
        v-on:change="$emit('change', $event.target.value)"
        @input="inputFun"
      />
      <textarea
        v-else
        :class="`my_inner my_textarea ${
          type == 'textarea' && Number(rows) > 1 && 'is_textarea'
        }`"
        :value="value"
        v-on:change="$emit('change', $event.target.value)"
        :style="Number(rows) > 1 ? `height:${30 * Number(rows)}px;line-height:1.5;` : ''"
      ></textarea>
      <div class="clear_icon">
        <!-- 带清除的input -->
        <div v-if="showIcon" @click="clearInputFun">
          <i class="iconfont icon-shibai"></i>
        </div>
        <!-- 带图标的input -->
        <div v-if="icon == 'date_icon'">
          <i class="iconfont icon-rili"></i>
        </div>
        <!-- 带显示密码的input -->
        <div v-if="showPassword" @click="showPasswordFun">
          <i class="iconfont icon-yanjing"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myInput",
  //设置双向绑定  prop 取从父级得到的值  event 监听的回调事件
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: [String, Number], //绑定的值
    disabled: {
      //禁用
      type: Boolean,
      default: false,
    },
    clearable: {
      //带删除按钮
      type: Boolean,
      default: false,
    },
    showPassword: Boolean, //密码输入框
    type: {
      type: String,
      default: "text",
    },
    icon: [String, Number],
    rows: [String, Number],
  },
  data() {
    return {
      showIcon: false,
      showPasswordVisible: false, //控制显示按钮开关
    };
  },
  mounted() {
  },
  methods: {
    //控制清除按钮显示
    inputFun(event) {
      this.showIcon = String(event.target.value).length ? true : false;
      this.$emit("change", event.target.value);
    },
    //清空数据
    clearInputFun() {
      this.showIcon = false;
      this.$emit("change", null);
    },
    showPasswordFun() {
      this.showPasswordVisible = !this.showPasswordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
