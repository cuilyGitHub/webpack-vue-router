<template>
    <div class="about-main-wrapper">
        <title-components this-title="关于我们" this-transform="About Us"></title-components>
        <div class="about-content">
            <p>知路是普来科技研发的车联网C2B信息共享平台，产品服务于3000万卡车司机，为卡车司机提供定制化的服务产品，包括但不局限于找油气站、路线规划、路况提醒、油气卡充值、车友互动等汽车后市场服务，为您提供便捷的在途生活。</p>
            <p>人才是普来科技的财富，核心团队均来自于一线互联网公司，在互联网领域有着丰富的研发以及推广、运营经验。员工以90后为主，富有激情、勇于挑战，形成了不断创新的团队精神。怀着对产品的无限热情，我们将不断追求完美！亲爱的知路用户，希望您能从每一个精雕细琢的细节中体会普来团队的用心，体验车主移动互联生活的乐趣。</p>
        </div>
    </div>
</template>
<script>
import TitleComponents from '../components/title.vue';
export default {
    name: 'about',
    data() {
        return {

        }
    },
    components:{
        TitleComponents
    }
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";
.about-main-wrapper {
    @include background('../assets/images/about-us-background.png');
    background-size: 100% 100%;
    height: 688px;
    font-size: 24px;
    padding-top: 100px;
    .about-content {
        font-size: 24px;
        @include middleWrapper;
        margin-top: 79px;
        p {
            text-indent: 2em;
        }
    }
}
</style>
