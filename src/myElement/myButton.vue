<template>
  <div class="my_button_box">
    <button class="my_button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "myButton",
  // model: {
  //   prop: "value",
  //   event: "change",
  // },
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/element.scss";
</style>
