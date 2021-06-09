<template>
  <div class="element_box">
    <div class="element_li mar_b_20">
      <el-input v-model="test" disabled />
      <el-input v-model="test" clearable />
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="test"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="test"
        show-password
        clearable
      ></el-input>
      <my-input v-model="name" clearable/>
      <my-input v-model="name" rows="2" type="textarea"/>
      <input type="textarea"  class="textarea"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "element_components",
  data() {
    return {
      name: "",
      test: "22222",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
