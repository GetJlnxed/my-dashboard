<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style lang="stylus" scoped>
.row
  display flex
  flex-wrap wrap
  flex-grow 1
  flex-shrink 1
  flex-basis auto
</style>
