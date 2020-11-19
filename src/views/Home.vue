<template>
  <div class="home">
    <router-link to="/about">
      <el-button size="mini" type="primary" round plain>60秒计时器</el-button>
    </router-link>
  </div>
</template>

<script>
import sss from '@/components/Timer60'
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    //加载所有的组件
    let allComponents = require.context("../components", false, /\.vue/).keys();
    console.log(allComponents)
    allComponents.map((item,index)=>{
      item.toLowerCase()
      item.charAt(0);
      return null;
      return `<router-link to="/about">
        <el-button size="mini" type="primary" round plain>60秒计时器</el-button>
      </router-link>`
    })
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 30px 50px;
}
</style>
