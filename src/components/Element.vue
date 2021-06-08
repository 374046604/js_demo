<template>
  <div class="element_box">
		<div class="element_li">
			<el-input v-model="aa" disabled/>
			<input :class="`my_inner my_input ${disabled&&'is_disabled'}`" v-model="aa" :disabled="disabled"/>
		</div>
  </div>
</template>

<script>
import ss from "../utils/element.scss";
export default {
  name: "element_components",
  data() {
    return {
      aa: "111",
			disabled:true,
	  
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
