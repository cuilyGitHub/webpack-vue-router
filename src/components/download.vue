<template>
    <div class="download-app">
        <div class="download-left">
            <ul>
                <li>
                    <img src="../assets/images/iphone.png" alt="">
                    <span>Iphone版本下载</span>
                </li>
                <li>
                    <img src="../assets/images/android.png" alt="">
                    <span>Android版本下载</span>
                </li>
            </ul>
        </div>
        <div class="dowload-right">
            <span>扫描二维码立即下载</span>
            <div class="code-img">
                <img src="/images/zhilu-qr-code.png" alt="">
            </div>
            <b>知路 安卓/苹果版</b>
        </div>
    </div>
</template>
<script>
export default {
    name: 'download',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";
.download-app {
    .download-left {
        width: 308px;
        height: $w;
        float: left;
        ul {
            width: $w;
            height: $w;
            li {
                cursor: pointer;
                width: $w;
                height: 86px;
                border-radius: 8px;
                background-color: #ffffff;
                background-color: rgba(255, 255, 255, 0.3);
                @include opcityBack(3);
                padding-left: ((86-58)/2)+px;
                padding-top: ((86-58)/2)+px;
                color: #ffffff;
                ;
                img {
                    width: 58px;
                    height: 58px;
                    float: left;
                    filter: alpha(opacity=100);
                    ;
                    position: relative;
                    opacity: 1;
                }
                span {
                    font-size: 24px;
                    float: left;
                    display: inline-block;
                    height: 58px;
                    line-height: 58px;
                    margin-left: 0.5em;
                    color: #ffffff;
                    filter: alpha(opacity=100);
                    position: relative;
                    opacity: 1;
                }
            }
            &:first-child li {
                margin-bottom: 12px;
            }
        }
    }
    .dowload-right {
        width: 146px;
        height: $w;
        text-align: center;
        float: right;
        color: #ffffff;
        .code-img {
            width: 146px;
            height: 146px;
            background-color: #ffffff;
            background-color: rgba(255, 255, 255, 0.3);
            @include opcityBack(3);
            overflow: hidden;
            img {
                width: 130px;
                height: 130px;
                float: left;
                margin-left: 8px;
                margin-top: 8px;
                position: relative;
                filter: alpha(opacity=100);
            }
        }
        b {
            font-weight: normal;
        }
    }
}
</style>

