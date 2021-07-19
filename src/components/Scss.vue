<template>
  <div class="element_box">
    <div class="test"></div>
    <div class="test1"></div>
  </div>
</template>

<script>
export default {
  name: "scss",
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
  //定义变量
  $width100 :100%;
  $height50 : 50px;
  //插槽#{$name} 类似 ${} 
  //一般是用于输出具体的转换
  @function remToPx($rem:1){
    @return #{$rem*100} + px;
  } 
  //mixin 一般用于整段样式输出
  @mixin box($width: 100px, $height: 100px) {
    width: $width;
    height: $height;
    box-shadow: 0px 0px 5px black;
    margin: 10px;
  }
  //循环用法
  @for $col from 1 through 24 {
    .my_col.my_col_#{$col} {
        width: ( $col / 24 * 100) * 1%;
    }
  }
  .test {
    width: $width100;
    height: remToPx(2);
    background: red;
  }
  .test1 {
    @include box(200px,200px);
  }
  //后续继承什么的 遇到在说吧。
  //scss还有很多内置函数的东西 上面都常用 的用法

  // 后续来了
  // scss变量其实就是宏，不是真的变量，一旦编译不可覆盖和改写 这导致无法动态样式
  // 动态样式写法(使用的css原生变量)

  .menu_box {
    --background:#D3533D;

    font-size: 24rpx;
    background: #FFF;
    overflow: hidden;
    &.hui {
        --background:#D1D1D1;
        view {
          background: var(--background);
        }
    }
  
  }


</style>
