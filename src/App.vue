<template>
  <div id="app">
    <nav-component></nav-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import './assets/lib/reset.css';
import './assets/lib/animate.css';

import $ from 'jquery';

import "./assets/lib/swiper-3.4.1.min.css";
import "./assets/lib/swiper-3.4.1.jquery.min.js";

import NavComponent from './components/nav.vue';
import FooterComponent from './components/footer.vue'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    NavComponent,
    FooterComponent
  },
  created() {
    let mySwiper = new Swiper('.phone-swiper .swiper-container', {
      loop: true,
      speed: 100,
      autoplay: 500,
      noSwiping: true,
      simulateTouch: false,
    });
  }
}
</script>

<style lang="scss">
@import './assets/scss/common.scss';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

html {
  width: $w;
  height: $w;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: "Microsoft YaHei";
}

body {
  @include area($w, $w);
  .main {
    width: $w;
    background-color: $f;
  }
}
</style>
