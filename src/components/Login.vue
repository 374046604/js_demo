<template>
  <div class="login_box">
    <div class="login_back">
      <video autoplay muted loop 
      src="https://storage.coverr.co/videos/ii02Tn3eMcFEyZYxC402yYMjnxPA1XFz8a?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjA4NTMyMjM0fQ.Maq8QSSGe1lGZRfouwVawYHrjqxWFpsULlSZEH1m6IY"></video>
    </div>
    <div class="login_main_back">
      <el-form :model="form" :rules="rules" ref="form" class="login_main">
        <div class="font_26 mar_b_20">系统登录</div>
        <el-form-item prop="userName">
          <el-input placeholder="请输入账号" v-model="form.userName" prefix-icon="el-icon-user"/>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input class="mar_b_20" placeholder="请输入密码" v-model="form.password" show-password/>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" style="width:100%;">立即创建</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name:'login_box',
    data(){
      return {
        form:{
          userName:'',
          password:''
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    mounted(){

    },
    methods:{
      onSubmit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
};
</script>

<style lang="scss" scoped>
  .login_box {
    width: 100vw;
    height: 100vh;
    .login_back {
      width: 100%;
      height: 100%;
      &>video {
        margin: 0 auto;
        height: 100%;
        opacity: 0.8;
      }
    }
    .login_main_back {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      margin-top: 20%;
      width: 520px;
      text-align: center;
      border-radius: 20px;
      z-index: 10;
      .login_main {
        
      }
    }
  }
</style>