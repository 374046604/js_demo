<template>
  <div>
    <div class="my_input_box">
      <input
        :class="`my_inner my_input ${disabled && 'is_disabled'}`"
        v-model="input"
        :disabled="disabled"
        :clearable="clearable"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "myInput",
  props:[

  ],
  data() {
    return {
      test: 2222,
      myInput: "111",
      myDisabled: true,
      myClearable: true,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
