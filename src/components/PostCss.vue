<template>
  <div class="post_css">
    <van-field rows="10" autosize type="textarea" v-model="value" disabled />
    <div class="test">
      <div class="dom1"></div>
      <div class="dom2"></div>
      <div class="dom3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "post_css",
  data() {
    return {
      value: `npm install postcss-px-to-viewport --save-dev
        //根目录添加postcss.config.js
        module.exports = {
          plugins: {
              autoprefixer: {},
              "postcss-px-to-viewport": {
                unitToConvert: 'px',
                viewportWidth: 750,             //视窗宽度  一般对应设计稿宽度 750  https://huodong.m.taobao.com/act/layouttestvw.html
                viewportHeight: 1334,           //视窗高度  一般指定1334  可以不配置
                unitPrecision: 3,               //指定px转换为视窗单位值得小数位数（很多时候不能整除）
                viewportUnit: "vw",             //指定需要转换成的视窗单位，建议使用vw
                selectorBlackList: ['.ignore', '.hairlines','van-',/^(.van)/,/^(.igno)/], //指定不转换为视窗单位的类，可以自定义，可无限添加
                minPixelValue: 1,               //小于或等于1px不转换为视窗单位
                mediaQuery: false               //允许在媒体查询中转换px
              },
          }
        }
      `,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.test {
  width: 100%;
  height: 100%;
  .dom1 {
    width:750px;
    height: 10px;
    background: red;
  }
  .dom2 {
    width:375px;
    height: 10px;
    background: red;
  }
  .dom3 {
    width:250px;
    height: 10px;
    background: red;
  }
}
</style>