/**
 * Created by sunhuimin on 2017/8/8.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Paycard from '../components/paycard.vue';
import Payment from '../components/payment.vue';
import Inforcentenr from '../components/inforcenter.vue';
import About from '../components/about.vue';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home,
            beforeRouteUpdate(to, from, next) {
                console.log(to, from, next);
            }
        },
        {
            path: "/about",
            name: "about",
            component: About,
            beforeRouteUpdate(to, from, next) {
                console.log(to, from, next);
            }
        },
        {
            path: "/paycard",
            name: "paycard",
            component: Paycard,
            beforeRouteUpdate(to, from, next) {
                console.log(to, from, next);
            }
        },
        {
            path: "/payment",
            name: "payment",
            component: Payment,
            beforeRouteUpdate(to, from, next) {
                console.log(to, from, next);
            }
        },
        {
            path: "/inforcenter",
            name: "inforcenter",
            component: Inforcentenr,
            beforeRouteUpdate(to, from, next) {
                console.log(to, from, next);
            }
        },
        {
            path: '/*',
            name: 'home',
            component: Home,
            beforeRouteUpdate(to, from, next) {
                console.log(to, from, next);
            }
        }
    ]
})