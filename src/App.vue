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
