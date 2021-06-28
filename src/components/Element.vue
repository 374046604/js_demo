<template>
  <div class="element_box">
    <div class="element_li mar_b_20">
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="primary" icon="el-icon-delete">222</el-button>
      <el-button type="primary" :loading="true">加载中</el-button>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <div></div>
      <my-button type="primary">主要按钮</my-button>
      <my-button type="primary" plain>简朴按钮</my-button>
      <my-button type="primary" disabled>主要按钮</my-button>
      <my-button circle icon="el-icon-search"></my-button>
      <my-button type="success" icon="el-icon-check" circle></my-button>
      <my-button type="success" icon="el-icon-check" >222</my-button>
      <my-button-group>
        <my-button type="primary" icon="el-icon-edit"></my-button>
        <my-button type="primary" icon="el-icon-share"></my-button>
        <my-button type="primary" icon="el-icon-delete"></my-button>
      </my-button-group>
    </div>
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
