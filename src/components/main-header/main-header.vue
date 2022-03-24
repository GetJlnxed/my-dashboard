<template>
  <header class="main__header header container container--column nowrap">
    <div class="container">
      <div class="opener" @click="$emit('opener-clicked')">
        <div class="opener__part"></div>
        <div class="opener__part"></div>
        <div class="opener__part"></div>
      </div>
      <div class="header__search"></div>
      <div class="header__avatar"></div>
    </div>
    <div class="container container--row items">
      <div class="item__block"></div>
      <div class="item__block"></div>
      <div class="item__block"></div>
      <div class="item__block"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-header",
};
</script>

<style lang="stylus" scoped>
$burger-width = 3px

.header
  margin-bottom 60px
  height 140px
  width 100
  padding 20px 0

  .header__title
    align-self flex-end

  .opener
    width 30px
    cursor pointer
    position relative

    .opener__part
      content ''
      margin-top 6px
      width 30px
      height $burger-width
      background-color $color-black
</style>
