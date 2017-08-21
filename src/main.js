import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import "./assets/lib/jquery.nicescroll.min.js"

import './assets/lib/pace.css'
import './assets/lib/pace.min.js';

import $ from 'jquery'

Vue.config.productionTip = false;

var vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    install() {

    },
    watch: {
        '$route' (to, from) {}
    },
    created() {

    }
})

window.onload = function() {
    $("html").niceScroll({
        cursorwidth: "12px",
        cursorcolor: "#eaeaea"
    });
}