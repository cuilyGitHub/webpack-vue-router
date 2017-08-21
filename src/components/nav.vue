<template>
    <div class="head">
        <h1>知路官方网站www.e-zhilu.com</h1>
        <div class="head-middle">
            <div class="head-middle-left">
                <div></div>
                <h2></h2>
            </div>
            <div class="head-middle-right">
                <ul class="navgater">
                    <li v-for="i in linkConf">
                        <router-link :to="i.path" >{{i.word}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "nav",
    data() {
        return {
            linkConf:[{
                path:'home',
                word:'产品介绍',
            },{
                path:'payment',
                word:'注册会员',
            },{
                path:'inforcenter',
                word:'资讯中心',
            },{
                path:'paycard',
                word:'油气卡充值',
            },{
                path:'about',
                word:'关于我们',
            }]
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";
a.router-link-active {
  border: 1px solid #0288D1;color: #0288D1;
}
li.router-link-active a {
  border: 1px solid #0288D1;color: #0288D1;
}
.head {
    @include area($w, 120px);
    background-color: $f;
    .head-middle {
        @include area($mw, $w);
        margin: 0 auto;
        overflow: hidden;
    }
    h1 {
        width: 0;
        height: 0;
        font-size: 0.32px;
        display: none;
    }
}

.head-middle {
    .head-middle-left {
        @include area(385px, $w);
        float: left;
        overflow: hidden;
        div {
            @include area(63px, $w);
            float: left;
            @include background('../assets/images/weblogo.png');
            margin-right: 22px;
        }
        h2 {
            @include area(300px, $w);
            float: left;
            @include background('../assets/images/company.png');
        }
    }
    .head-middle-right {
        float: right;
        @include area(598px, $w);
        overflow: hidden;
        display: table;
    }
}

.head-middle-right {
    ul {
        @include area($w, 30px);
        margin-top: 45px;
        cursor: pointer;
        li {
            float: left;
            height: $w;
            width: 20%;
            font-size: 16px;
            color: #666666;
            text-align: center;
            a {
                display: inline-block;
                padding: 0 13px;
                border-radius: 8px;
                font-size: 16px;
            }
        }
    }
}
</style>

