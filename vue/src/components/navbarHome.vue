<template>
  <div id="navbar">
    <b-navbar
      :class="scrolled"
      id="fixed_nav"
      toggleable="sm"
    >

      <b-navbar-brand href="#">
        <img id="brandIcon" src="@/assets/passion-fruit.png" alt="Icon">
        <strong id="brandName">Nutriapp</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav
          style="width: 100%; margin-right:2em;"
          align="right"
          >
          <b-nav-item style="margin-right:2em;">
            <span id="LogInBtn"> Log in</span>
          </b-nav-item>
          
          <b-button id="tryBtn">
            Try it Out!  
          </b-button>      

        </b-navbar-nav>

      </b-collapse>

    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "navbarHome",
  data() {
    return {
      lastScrollPosition: 0,
      scrolled: {
        scrolled_up: false,
        scrolled_down: false,
      },
    };
  },
  methods: {
    handleScroll: function () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles,
      //we shouldn't continue if it is less than zero
      if (currentScrollPosition < 30) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.scrolled.scrolled_up =
        currentScrollPosition < this.lastScrollPosition;
      this.scrolled.scrolled_down = !this.scrolled.scrolled_up;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
</script>
<style scoped>
#fixed_nav{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.scrolled_down {
  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;
}
.scrolled_up {
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}
#brandIcon{
  width:2em;
  height: 2em;
  margin-left: 2em;
  vertical-align: top;
}
#brandName{
  color:black;
  font-size:1.3em;
  bottom:0px;
  line-height:2;
}
#LogInBtn{
  color:black!important;
}
#tryBtn{
  background-color:#ff5e01;
    color:white!important;
    font-weight: bold;

}
</style>