<template>
  <div id="app">
    <progress-bar></progress-bar>
    <nav-component></nav-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavComponent from './components/nav.vue';
import FooterComponent from './components/footer.vue'
import progressBar from './components/progress-bar.vue'

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
    FooterComponent,
    progressBar
  },
  created() {
  }
}
</script>

<style lang="scss">
@import './assets/scss/common.scss';
@import './assets/lib/reset.css';
@import './assets/lib/animate.css';
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

a {
    text-decoration: none;
}

table {
    border-collapse: collapse;
    /* 边框合并属性  */
    // width:200px;
}

th {
    border: 1px solid #666666;
}

td {
    border: 1px solid #666666;
    padding: 24px;
}

ul.bankIcon li {
    width: 124px;
    padding: 10px 10px;
    float: left;
}

body,
div,
a,
ul,
li,
h1,
table {
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #555;
}
</style>
