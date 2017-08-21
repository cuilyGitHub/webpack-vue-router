<template>
    <div class="home-main-wrapper">
        <div class="banner">
            <div class="download-wrapper animated fadeInLeft">
                <h2 class="discription-lg">
                    <img src="../assets/images/travel.png" alt="">
                </h2>
                <h3 class="discription-sm">
                    <img src="../assets/images/reliable.png" alt="">
                </h3>
                <download></download>
                <phone-swiper></phone-swiper>
            </div>
        </div>
        <div class="home-main-product">
            <div class="product-presentation">
                <p></p>
                <h3>产品介绍</h3>
            </div>
            <div class="product-items">
                <div class="items-clume">
                    <div class="item" @mouseenter="productHover" @mouseleave="productOut">
                        <div class="top-icon">
                            <div class="circle-img">
                                <img class="is-hover" src="../assets/images/find-station.png" alt="">
                                <img class="out-hover" src="../assets/images/find-station-opcity.png" alt="" style="display:none;">
                            </div>
                        </div>
                        <h3>找油气站</h3>
                        <p>精准定位，帮助卡友查找距离最近的油气站，自动规划最佳导航路线，即使身处陌生地点，也不必担心找不到油气站。</p>
                    </div>
                    <div class="item" @mouseenter="productHover" @mouseleave="productOut">
                        <div class="top-icon">
                            <div class="circle-img">
                                <img class="is-hover" src="../assets/images/compare.png" alt="">
                                <img class="out-hover" src="../assets/images/compare-opcity.png" alt="" style="display:none;">
                            </div>
                        </div>
                        <h3>智能比价</h3>
                        <p>智能比对用户当前范围内的站点价格，在最近的站点基础上筛选出价格最低的油气站，帮用户节省时间，更高效！</p>
                    </div>
                    <div class="item" @mouseenter="productHover" @mouseleave="productOut">
                        <div class="top-icon">
                            <div class="circle-img">
                                <img class="is-hover" src="../assets/images/price.png" alt="">
                                <img class="out-hover" src="../assets/images/price-opcity.png" alt="" style="display:none;">
                            </div>
                        </div>
                        <h3>知路价</h3>
                        <p>收集全国近5000家油气站挂牌价，结合平台补贴打造知路价，更便宜、更省钱。</p>
                    </div>
                </div>
                <div class="items-clume">
                    <div class="item" @mouseenter="productHover" @mouseleave="productOut">
                        <div class="top-icon">
                            <div class="circle-img">
                                <img class="is-hover" src="../assets/images/route-planning.png" alt="">
                                <img class="out-hover" src="../assets/images/route-planning-opcity.png" alt="" style="display:none;">
                            </div>
                        </div>
                        <h3>路线规划</h3>
                        <p>帮助卡友规划更省钱的路线信息，行车途中提前知晓周边油气站、收费站，事、更省心</p>
                    </div>
                    <div class="item" @mouseenter="productHover" @mouseleave="productOut">
                        <div class="top-icon">
                            <div class="circle-img">
                                <img class="is-hover" src="../assets/images/chat.png" alt="">
                                <img class="out-hover" src="../assets/images/chat-opcity.png" alt="" style="display:none;">
                            </div>
                        </div>
                        <h3>互动</h3>
                        <p>浏览知路资讯、查看卡友发布的途中趣闻、求助问答，打造司机群体专属社区</p>
                    </div>
                    <div class="item" @mouseenter="productHover" @mouseleave="productOut">
                        <div class="top-icon">
                            <div class="circle-img">
                                <img class="is-hover" src="../assets/images/find.png" alt="">
                                <img class="out-hover" src="../assets/images/find-opcity.png" alt="" style="display:none;">
                            </div>
                        </div>
                        <h3>发现</h3>
                        <p>为卡友提供丰富的增值服务内容，更精准！</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Download from "../components/download.vue";
import PhoneSwiper from '../components/phone.vue'
let hoverCss = {
    "border": "2px solid #f8f8f8",
    "color": "#0288d1"
};
let outHoverCss = {
    "border": "none",
    "color": "#333333"
};

export default {
    name: 'home',
    data() {
        return {

        }
    },
    methods: {
        productHover(e) {
            let ele = e.target;
            let circleImage = ele.getElementsByTagName('img')[0]

            ele.style.border = hoverCss.border;
            ele.style.color = hoverCss.color;

            ele.getElementsByClassName('circle-img')[0].style.backgroundColor = '#0288d1';
            ele.getElementsByTagName('h3')[0].style.color = '#0288d1'
            ele.getElementsByTagName('p')[0].style.color = '#0288d1'
            ele.getElementsByClassName('is-hover')[0].style.display = "none";
            ele.getElementsByClassName('out-hover')[0].style.display = "block";
        },
        productOut(e) {
            let ele = e.target;
            let circleImage = ele.getElementsByTagName('img')[0]

            ele.style.border = outHoverCss.border;
            ele.style.color = outHoverCss.color;

            ele.getElementsByClassName('circle-img')[0].style.backgroundColor = '#f8f8f8';
            ele.getElementsByTagName('h3')[0].style.color = '#333333'
            ele.getElementsByTagName('p')[0].style.color = '#333333'
            ele.getElementsByClassName('is-hover')[0].style.display = "block";
            ele.getElementsByClassName('out-hover')[0].style.display = "none";
        }
    },
    components: {
        Download,
        PhoneSwiper
    },
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";
.banner {
    @include area($w, 832px);
    @include background('../assets/images/banner_9-min.png');
    background-size: 100% 100%;
    .download-wrapper {
        position: relative;
        width: 1200px;
        height: $w;
        margin: 0 auto;
        .discription-lg,
        .discription-sm,
        .download-app {
            position: absolute;
            left: 0;
        }
        .discription-lg {
            top: 154px;
        }
        .discription-sm {
            top: 154+38+33px;
        }
        .download-app {
            top: 154 + 38 + 33 + 144px;
            overflow: hidden;
            width: 308+20+130+16+px;
            height: 86+12+86+px;
        }

    }
}

.home-main-wrapper {
    width: $w;
    .home-main-product {
        @include middleWrapper;
    }
}

.swiper-container {
    position: absolute;
    overflow: hidden;
    top: 84px;
    left: 62px;
    width: 295px;
    height: 524px;
    .swiper-wrapper {
        @include area($w,
        $w);
        .swiper-slide {
            @include area($w,
            $w);
            overflow: hidden;
            img {
                @include area($w,
                $w);
                float: left;
            }
        }
    }
}

.product-presentation {
    width: $w;
    height: 88px;
    overflow: hidden;
    line-height: 88px;
    position: relative;
    margin-top: 106px;
    p {
        height: 0px;
        width: $w;
        border: 1px solid #eeeeee;
        margin-top: 43px;
    }
    h3 {
        position: absolute;
        left: 50%;
        top: 0;
        border: 2px solid #eeeeee;
        height: $w;
        width: 298px;
        color: #333333;
        font-size: 36px;
        text-align: center;
        font-weight: normal;
        background-color: #ffffff;
        margin-left: -149px;
    }
}

.home-main-wrapper {
    padding-bottom: 120px;
}

.product-items {
    margin-top: 55px;
    width: 1200px;
    .items-clume {
        width: $w;
        height: 378px;
        overflow: hidden;
        margin-bottom: 32px;
        .item {
            width: 380px;
            height: $w;
            float: left;
            border-radius: 15px;
            text-align: center;
            padding: 24px;
            cursor: pointer;
        }
        & .item:nth-child(2) {
            margin-left: 30px;
            margin-right: 30px;
        }
    }
}

.item {
    .top-icon {
        width: $w;
        padding-left: ((380 - 48 - 131) / 2) + px;
        padding-left: ((380 - 48 - 131) / 2) + px\9;
        margin-bottom: 33px;
        .circle-img {
            border-radius: 50%;
            width: 131px;
            height: 131px;
            background-color: #f8f8f8;
            overflow: hidden;
            .is-hover,
            .out-hover {
                width: 78px;
                height: 78px;
                margin: (131 - 78)/2+px auto 0;
            }
        }
    }
    h3,
    p {
        color: #333333;
    }
    h3 {
        font-size: 22px;
        font-weight: normal;
        margin-bottom: 33px;
    }
    p {
        font-size: 16px;
    }
}
</style>
