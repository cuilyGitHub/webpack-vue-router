<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <ul class="click-nav">
      <li ref="clicknav" class="clickNav" v-on:mouseover="overMouse" v-on:mouseout="outMouse"><router-link to="/home">go to home</router-link></li>
      <li ref="clicknav" class="clickNav" v-on:mouseover="overMouse" v-on:mouseout="outMouse"><router-link to="/essential">Essential Links</router-link></li>
      <li ref="clicknav" class="clickNav" v-on:mouseover="overMouse" v-on:mouseout="outMouse"><router-link to="/ecosystem">Ecosystem</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        clickNav:"clickNav"
    }
  },
    methods:{
      overMouse(e){
          e.currentTarget.className='isClickNav';
      },
      outMouse(e){
          e.currentTarget.className='clickNav';
      }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
  .click-nav{
    color: #333;
  }
  .click-nav li a{color: #333;font-family: "Microsoft YaHei";font-weight: 900;}
  .isClickNav a{color:#fff;background-color: aqua;border: 1px solid #028d4a;}
  .clickNav a{color:#333;background-color: #fff;}
</style>
