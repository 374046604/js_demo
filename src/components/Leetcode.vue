<template>
  <div class="box">
    
  </div>
</template>

<script>
import betterScroll from './betterScroll/index'
export default {
    name:'es6',
    components:{
    },
    data(){
      return {
      }
    },
    mounted(){
      //001 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。 你可以按任意顺序返回答案。 来源：力扣（LeetCode） 链接：https://leetcode-cn.com/problems/two-sum 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
      {
        let ums = [2,7,11,15], target = 9;
        var twoSum = function() {
          let outArr = new Map();
          ums.forEach((item,index)=>{
            if(outArr.has(target-item)){
              console.log([outArr.get(target-item),index])
              return [outArr.get(target-item),index]
            }else{
              //不停的添加未匹配的数据
              outArr.set(item,index);
            }
          })
        };
        twoSum();
      }
      {
        let ums = [2,7,11,15], target = 9;
        var twoSum = function() {
          let outArr = new Map();
          ums.forEach((item,index)=>{
            if(ums.indexOf(target-item)>=0){
              console.log([index,ums.indexOf(target-item)])
              return [index,ums.indexOf(target-item)]
            }
          })
        };
        twoSum();
      }
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
</style>