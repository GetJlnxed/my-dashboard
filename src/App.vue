<template>
  <div id="app" class="container container--row nowrap">
    <nav
      class="nav container container--column align-center"
      :class="{
        'nav--active': navMenuOpen,
      }"
    >
      <div class="nav__wrapper container container--column align-center fluid">
        <p class="nav__title text text--h5 text--bold">MyDashboard</p>
        <router-link active-class="button-active" class="button nav__button" :to="{ name: 'Home' }"
          >Dashboard</router-link
        >
        <router-link active-class="button-active" class="button nav__button" :to="'/about'">Customers</router-link>
        <router-link active-class="button-active" class="button nav__button" :to="'/1'">Home</router-link>
        <router-link active-class="button-active" class="button nav__button" :to="'/2'">Invoices</router-link>
        <router-link active-class="button-active" class="button nav__button" :to="'/3'">Items</router-link>
        <!-- <font-awesome-icon :icon="['fas', 'credit-card']"></font-awesome-icon> -->
      </div>
    </nav>
    <div
      class="main container container--column"
      :class="{
        'main--shifted': navMenuOpen,
      }"
    >
      <main-header :navMenuOpened="navMenuOpen" @opener-clicked="toggleNavMenu"></main-header>
      <div class="main__content">
        <router-view v-slot="{ Component }">
          <transition name="fade" appear>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from "@/components/main-header/main-header";

function setWidth(width) {
  if (width > 1600) return "xlg-max";
  else if (width < 1600 && width > 1366) return "xlg";
  else if (width < 1366 && width > 1280) return "lg";
  else if (width < 1280 && width > 1024) return "md";
  else if (width < 1024 && width > 768) return "tablet";
  else if (width < 768 && width > 480) return "sm";
  else if (width < 480) return "xs";
}
export default {
  name: "App",
  provide() {
    return {
      windowSize: this.windowSize,
    };
  },
  data() {
    return {
      windowSize: {
        width: 0,
        breakpoint: null,
      },
      navMenuOpen: true,
      temp: {
        username: "Alice",
      },
    };
  },
  components: {
    mainHeader,
  },
  mounted() {
    this.setWindowSize();
    window.addEventListener("resize", this.setWindowSize);
  },
  methods: {
    setWindowSize() {
      this.windowSize.breakpoint = setWidth(window.innerWidth);
      this.windowSize.width = window.innerWidth;
    },
    toggleNavMenu() {
      this.navMenuOpen ? (this.navMenuOpen = false) : (this.navMenuOpen = true);
    },
  },
};
</script>

<style lang="stylus" scoped>
#app
  background-color $color-white
  height 100%
  position relative

.main
  width 100%
  padding-left 40px
  background-color $color-ghostwhite
  position relative
  left 0
  overflow-x hidden
  transition left 0.5s, width 0.5s

  &.main--shifted
    width calc(100% - 300px)
    left 300px

.main__content
  padding-right 20px
  box-sizing border-box

.nav
  transition left 0.5s
  width 300px
  background-color $color-dark-blue
  position relative
  overflow hidden
  position fixed
  height 100%
  left -300px

  &.nav--active
    left 0px

  .nav__button
    width 85%
    margin 20px 0
    font-weight 500

  .nav__title
    margin-top 30px
    margin-bottom 90px
    color $color-white

  .nav__close-link
    margin-top auto
    margin-bottom 20px

    &:hover
      background-color transparent
      color $color-white

  .current-link
    background-color $color-white
</style>
