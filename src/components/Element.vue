<template>
  <div class="element_box">
		<div class="element_li mar_b_20">
			<el-input v-model="test" disabled/>
			<el-input v-model="test" clearable/>
      <my-input/>
		</div>
  </div>
</template>

<script>
export default {
  name: "element_components",
  data() {
    return {
      test:2222,
      myInput: "111",
			myDisabled:true,
      myClearable:true
    };
  },
  mounted() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
