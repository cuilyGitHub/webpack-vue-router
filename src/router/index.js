/**
 * Created by sunhuimin on 2017/8/8.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import Ecosystem from '../components/Ecosystem.vue'
import Essential from '../components/Essential.vue'
Vue.use(Router);

export default new Router({
    routes:[{
        path:'/home',
        name:'hello',
        component:Hello
    },{
        path:'/essential',
        name:'essential',
        component:Essential
    },{
        path:'/ecosystem',
        name:'ecosystem',
        component:Ecosystem
    },{
        path:'/*',
        name:'hello',
        component:Hello
    }]
})