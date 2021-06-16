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
      
      <my-input v-model="name" disabled />
      <my-input v-model="name" clearable />
      <my-input v-model="name" showPassword />
      <my-input v-model="name" icon="date_icon" />
      <my-input v-model="name" rows="20" type="textarea" />
    </div>
    <div class="element_li mar_b_20">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      
      <my-button>默认按钮</my-button>
      <my-button type="primary">主要按钮</my-button>
    </div>

  </div>
</template>

<script>
import myInput from '../myElement/myInput.vue';
let testMixins = {
  methods: {
    testFun(){
      console.log('1111111')
    }
  }
}
export default {
  components: { myInput },
  name: "element_components",
  data() {
    return {
      name: "",
      test: "22222",
    };
  },
  mixins: [testMixins],
  mounted() {},
  methods: {
    testFun(){
      console.log('2222222')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
