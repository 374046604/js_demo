<template>
  <div class="canvas">
    <img src="http://cms-web.koosell.cn/client/static/img/header.7d12ea9.png" />
    <div
      class="canvas_main"
      @drop="handleDrop"
      @dragover="handleDragOver"
    >
    
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {deepCopy} from 'utils'
export default {
  name: "canvas_box",
  data() {
    return {
      nowComponent:null,
      //组件数据源
      componentList:{
        'v-input':{
          component: 'v-text', // 组件名称，需要提前注册到 Vue
          label: '文字', // 左侧组件列表中显示的名字
          propValue: '文字', // 组件所使用的值
          icon: 'el-icon-edit', // 左侧组件列表中显示的名字
          animations: [], // 动画列表
          events: {}, // 事件列表
          style: { // 组件样式
              width: 200,
              height: 33,
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '',
              letterSpacing: 0,
              textAlign: '',
              color: '',
          }
        }
      }
    }
  },
  mounted() {},
  methods: {
    //拖拽图形在另一个图形上释放，在后者上触发
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      //组件名
      //e.dataTransfer.getData("componentName");
      if(localStorage['componentName']){
        this.nowComponent = this.componentList[localStorage['componentName']];
        //通过现有信息生成组件
       
        localStorage['componentName'] = null;
      }
    },
    handleDragOver(e) {
      console.log("组件拖拽到了画布上");
      e.preventDefault();
      // e.dataTransfer.dropEffect = "copy";
    },
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  margin-left: 400px;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100vh;
  background: #fff;
  overflow-y: auto;
  & > img {
    width: 100%;
  }
  .canvas_main {
    flex: 1;
  }
}
</style>