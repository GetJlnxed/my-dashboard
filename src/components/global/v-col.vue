<template>
  <div class="col" :class="colsClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VCol",
  props: {
    cols: {
      type: [String, Number],
      required: false,
      validator: function (value) {
        return value > 0 && value <= 12;
      },
    },
  },
  computed: {
    colsClass() {
      if (this.cols && this.cols > 0 && this.cols <= 12) {
        return `col-${this.cols}`;
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.col
  flex-basis 0%
  flex-grow 1
  max-width 100%
  padding 12px

.col-1
  flex 0 0 8.3333333333%
  max-width 8.3333333333%

.col-2
  flex 0 0 16.6666666666%
  max-width 16.6666666666%

.col-3
  flex 0 0 24.9999999999%
  max-width 24.9999999999%

.col-4
  flex 0 0 33.3333333332%
  max-width 33.3333333332%

.col-5
  flex 0 0 41.6666666665%
  max-width 41.6666666665%

.col-6
  flex 0 0 49.9999999998%
  max-width 49.9999999998%

.col-7
  flex 0 0 58.3333333331%
  max-width 58.3333333331%

.col-8
  flex 0 0 66.6666666664%
  max-width 66.6666666664%

.col-9
  flex 0 0 74.9999999997%
  max-width 74.9999999997%

.col-10
  flex 0 0 83.333333333%
  max-width 83.333333333%

.col-11
  flex 0 0 91.6666666663%
  max-width 91.6666666663%

.col-12
  flex 0 0 100%
  max-width 100%
</style>
