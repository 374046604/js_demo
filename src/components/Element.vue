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
    <div class="element_li mar_b_20">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <div class="clear_15"></div>
      <my-row>
        <my-col :span="24"></my-col>
      </my-row>
      <my-row>
        <my-col :span="12"></my-col>
        <my-col :span="12"></my-col>
      </my-row>
      <my-row>
        <my-col :span="8"></my-col>
        <my-col :span="8"></my-col>
        <my-col :span="8"></my-col>
      </my-row>
      <my-row>
        <my-col :span="6"></my-col>
        <my-col :span="6"></my-col>
        <my-col :span="6"></my-col>
        <my-col :span="6"></my-col>
      </my-row>
      <my-row>
        <my-col :span="4"></my-col>
        <my-col :span="4"></my-col>
        <my-col :span="4"></my-col>
        <my-col :span="4"></my-col>
        <my-col :span="4"></my-col>
        <my-col :span="4"></my-col>
      </my-row>
      <my-row :gutter="10">
        <my-col :span="8"></my-col>
        <my-col :span="8"></my-col>
        <my-col :span="8"></my-col>
      </my-row>
    </div>
  </div>
</template>

<script>
let testMixins = {
  methods: {
    testFun(){
      console.log('1111111')
    }
  }
}
export default {
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
  .grid-content {
    border: 1px solid red;
    border-radius: 10px;
    min-height: 36px;
  }
</style>
