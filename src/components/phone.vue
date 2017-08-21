<template>
    <div class="phone-swiper" id="phone-swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-no-swiping">
                    <img src="../assets/images/zl_home.png" alt="">
                </div>
                <div class="swiper-slide swiper-no-swiping">
                    <img src="../assets/images/roter-result.png" alt="">
                </div>
                <div class="swiper-slide swiper-no-swiping">
                    <img src="../assets/images/mine.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'

export default {
    name: 'phoneSwiper',
    data(){
        return{

        }
    },
    mounted (){
        this.swiper = new Swiper('#phone-swiper .swiper-container', {
            loop: true,
            speed: 1000,
            autoplay: 3000,
            noSwiping: true,
            simulateTouch: false,
        });
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/common.scss";
@import '../../node_modules/swiper/dist/css/swiper.min.css';
.phone-swiper {
    background: url("../assets/images/phone.png") no-repeat left;
    width: 431px;
    height: 762px;
    position: absolute;
    right: 0;
    margin-top: 50px;
}
.swiper-container{margin-left: 0;}
</style>


