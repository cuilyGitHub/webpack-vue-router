import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import "./assets/lib/pace.css";
import './assets/lib/pace.js';

import $ from "jquery";

import "./assets/lib/jquery.nicescroll.min.js"

Vue.config.productionTip = false;

$("html").niceScroll({
    cursorwidth: "12px",
    cursorcolor: "#eaeaea"
});
var vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    install() {

    },
    watch: {
        '$route' (to, from) {}
    }
})