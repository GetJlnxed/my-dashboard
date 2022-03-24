<template>
  <header class="main__header header container container--column nowrap">
    <div class="container">
      <div class="opener" :class="{ closed: navMenuOpened }" @click="$emit('opener-clicked')">
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
  props: {
    navMenuOpened: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
$burger-width = 3px
$burger-margin = 6px

.header
  margin-bottom 60px
  height 140px
  width 100
  padding 20px 0

  .header__title
    align-self flex-end

  .opener
    width 30px
    height 30px
    cursor pointer
    position relative

    .opener__part
      position absolute
      margin-top 6px
      width 30px
      height $burger-width
      background-color $color-black
      transition 0.5s

      &:first-of-type
        margin-top $burger-margin

      &:last-of-type
        margin-top: $burger-margin * 2

      &:nth-of-type(2)
        margin-top: $burger-margin * 3

    &.closed
      .opener__part
        &:first-of-type
          transform rotate(45deg)
          margin-top $burger-margin

        &:last-of-type
          transform rotate(-45deg)
          margin-top $burger-margin

        &:nth-of-type(2)
          opacity 0
</style>
