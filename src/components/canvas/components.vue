<template>
  <div class="components">
    <div class="mar_b_20" v-for="(item,index) in componentData" :key="index">
      <div class="components_title pad_l_10 pad_t_10 pad_b_10 font_18">{{item.title}}</div>
      <div class="components_li_box pad_t_10" @dragstart="handleDragStart">
        <div draggable  v-for="(item1,index1) in item.list" :key="index1" :data-comName="item1.component">
          <img draggable="false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAA6hJREFUeAHtm71u1EAQgHd9EVVyCF4AgsQLUIWWJhUIKcQSSAEFdBx9lIMu0JGLQp3jBBGJBJIvkZCoaKiQoKKiowi8AAgnDSjeZQZsFEV2br1j711842Yt78zOzLfj/TufEHwxASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJjAqBKRJoMud3kMTuarJ3G/O9o17zChorZeM5KonVBDABIyUj5LbSpc5EsYsA2NaJildBbDLa4HxG+dVIeBBxsAAifQZIAMkEiCqcwYyQCIBonquZQzRVqb6ylpvXklxJlMgpcLT4tvivdn1lCqnjwYOsL2+dV79Us+Fzhe3AnHQfd+av/Yln2ax0gMHiAAgA29bZeCA4WFXDBwgOjEMryL6YXPxLGxD7YAOAzwAw+bW6Svc7mxfkJ6q2zhqqqOVF7aaM59M5alyzgC2u72bOope6Ijqcj/9SICtW63G7EY/ySLqCwG42t2eilT0Ehx62mr6j1MdG5MfpNJvoK7UDIT2QwG2Un2Ah+1O8ACKuzWvdmOhMfMxS870ORngX3hR9BaWcXUhxXiW4Xi9diWr3tVz8HMc1pyTEfgMvk9TIZImkYPwpJCvJk+JJVcgbO2gj+grdngMccq2LdSzBngY3tnTes73/dJHOEqwqIs+oq9FQbQCeFzhJfCLhJh7DLSFt9INLmklX2utJ5JAyiillLvS01cXG/67o9pHiEEQzH39LmFI1Ndtx0SrDDzKsVGry52BOGtBFk5jj2HPYQ9iT/Yb/+KMKHsJY9x/4HMNfN/EGODrgrBWq1nNyFYZiBDRIBqOIW6iQ8beD1iwKHgYhhVAVDyuEIuERwKYBnHnhxj6LxfQR+pri7EnV+4xMFFMyv9j4r+t3F7y/HCJJ8/it1qF52WPg6E44S1knVTDsLMHO6adodnKISiECMU5vM+89vVFrcXlzPoCK+S+3oLmUo/64716+n7dwgdyBpraxNMROM767OQ4q1HB4ywE7fKczrRjqXLWszDVcFX0GSCxJ52NgZ1OcBJW3XeUlKXOwp7WYV2KZ82m/5PIxkjdGcBQer7SsIyBqbjMC39wB1u7UHTLtJO07QxgXasgFGLCSQaCrSTAsktnAONX6knZAblunycRInEGyACJBIjqnIEMkEiAqM4ZSASYaxkzMn86zLHYzwUQdhFD/+UBMaFyq5sBHJU/GebGxwpMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACYwSgT/3jnWmia6gkgAAAABJRU5ErkJggg==" />
          <div>{{item1.name}}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'components_box',
    data(){
      return {
        //组件模板
        componentData:[{
          title:'表单',
          list:[{name:'输入框',component:'v-input'}]
        }]
      }
    },
    mounted(){

    },
    methods:{
      handleDragStart(e) {
        e.target.style.opacity=0.5;
        console.log(e.target.dataset.comname);
        console.log(e.currentTarget.dataset.comname);
        //e.dataTransfer.setData("componentName",e.target.dataset.comname);
        localStorage['componentName'] = e.target.dataset.comname
      }
    }
};
</script>

<style lang="scss" scoped>
  .components {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 264px;
    background: #fff;
    overflow-y: auto;
    .components_li_box {
      display: flex;
      flex-wrap: wrap;
      &>div {
          margin-bottom: 10px;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          cursor: move;
          &>img {
              width: 40px;
              height: 40px;
          }
      }
    }
  }
</style>