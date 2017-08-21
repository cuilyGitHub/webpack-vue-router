<template>
    <div class="paycard-main-wrapper">
        <title-component  this-title="气卡充值" this-transform="card pay"></title-component>
        <div class="paycard-form">
            <div class="form-top">
                <div class="form-left">
                    <div>
                        油气卡号
                    </div>
                    <div>
                        充值金额
                    </div>
                    <div></div>
                    <div></div>
                    <div>支付方式</div>
                </div>
                <div class="form-right">
                    <input type="tel" class="card-num" maxlength="16" @keydown="telKeyUp" v-model="telValue" placeholder="请输入油气卡号码">
                    <div class="money-clume">
                        <span @click="clickSpan" class="is-click">5000</span>
                        <span @click="clickSpan">2000</span>
                        <span @click="clickSpan">1000</span>
                    </div>
                    <div class="money-clume">
                        <span @click="clickSpan">500</span>
                        <span @click="clickSpan">200</span>
                        <span @click="clickSpan">100</span>
                    </div>
                    <input type="tel" class="pay-money" placeholder="请输入100——5000的整数" minlength="3" maxlength="4" @keydown="payMthod" v-model="payValue">
                    <div class="pay-wrapper">
                        <div class="pay" @click.prevent.self="weiChatPay">
                            <img src="../assets/images/click-yes.png" alt=""> 微信支付
                        </div>
                        <div class="pay" @click.prevent.self="taobaoPay">
                            <img src="../assets/images/click-no.png" alt=""> 支付宝支付
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-bottom">
                <div>
                    <button id="currcy-pay" @click="payMoney">立即充值</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleComponent from '../components/title.vue'

export default {
    name: 'parcard',
    data() {
        return {
            telValue: "",
            payValue: "",
            blueSrc: "",
            focusSrc: ''
        }
    },
    components:{
        TitleComponent
    },
    methods: {
        weiChatPay(e) {
            this.blueSrc = JSON.parse(JSON.stringify(e.target.getElementsByTagName('img')[0].src));
            this.focusSrc = JSON.parse(JSON.stringify(e.target.nextSibling.nextSibling.getElementsByTagName('img')[0].src));
            if (e.target.getElementsByTagName('img')[0].src.indexOf('no') !== -1) {
                e.target.nextSibling.nextSibling.getElementsByTagName('img')[0].src = this.blueSrc;
                e.target.getElementsByTagName('img')[0].src = this.focusSrc;
            }
        },
        taobaoPay(e) {
            this.blueSrc = JSON.parse(JSON.stringify(e.target.getElementsByTagName('img')[0].src));
            this.focusSrc = JSON.parse(JSON.stringify(e.target.previousSibling.previousSibling.getElementsByTagName('img')[0].src));

            if (e.target.getElementsByTagName('img')[0].src.indexOf('no') !== -1) {
                e.target.previousSibling.previousSibling.getElementsByTagName('img')[0].src = this.blueSrc;
                e.target.getElementsByTagName('img')[0].src = this.focusSrc;
            }
        },
        clickSpan(e) {
            $(e.target).siblings().removeClass('is-click');
            $(e.target).parent().siblings().find('.is-click').removeClass('is-click');
            $(e.target).addClass('is-click');
        },
        telKeyUp() {
            this.telValue = this.telValue.replace(/[^0-9-]+/, '');
        },
        payMthod(e) {
            this.payValue = this.payValue.replace(/[^0-9-]+/, '');
        },
        payMoney() {

        }
    }
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";

.paycard-main-wrapper {
    background-color: #fbfbfb;
    width: $w;
    //height: 533+82px;
    padding-top: 48px;
    .paycard-form {
        @include area(628px, 533px);
        margin: 0 auto;
        font-size: 18px;
        color: #666666;
        margin-top: 48px;
        .form-top {
            overflow: hidden;

            .form-left {
                font-size: 18px;
                float: left;
                height: $w;
                width: 628-464+px;
                text-align: center;
                div {
                    width: $w;
                    height: 50px;
                    line-height: 50px;
                    margin-bottom: 22px;
                    font-size: 18px;
                }
            }
            .form-right {
                float: right;
                width: 464px;
                height: $w;
                .card-num {
                    line-height: 50px\9;
                    _line-height: 50;
                    width: 464px;
                    height: 50px;
                    border-radius: 4px;
                    margin-bottom: 22px;
                    font-size: 18px;
                    text-indent: 1em;
                    border: 2px solid #E0DFDF;
                }
                .money-clume {
                    width: $w;
                    height: 50px;
                    margin-bottom: 22px;
                    font-size: 18px;
                    & span:first-child {
                        margin-right: 15px;
                    }
                    & span:last-child {
                        margin-left: 15px;
                    }
                    span {
                        cursor: pointer;
                        color: #666666;
                        display: inline-block;
                        width: 140px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        border-radius: 4px;
                        border: 2px solid #E0DFDF;
                    }
                    .is-click {
                        color: #0288D1;
                        border: 2px solid #0288D1;
                    }
                }
                .pay-money {
                    margin-bottom: 22px;
                    line-height: 50px\9;
                    _line-height: 50;
                    width: 302px;
                    height: 50px;
                    border-radius: 4px;
                    font-size: 18px;
                    text-indent: 1em;
                    border: 2px solid #E0DFDF;
                }
            }
            .pay-wrapper {
                width: $w;
                height: 50px;
                overflow: hidden;
                .pay {
                    width: 140px;
                    height: 50px;
                    line-height: 50px;
                    float: left;
                    margin-bottom: 22px;
                    font-size: 18px;
                    img {
                        margin-right: 8px;
                    }
                }
            }
        }
        .form-bottom {
            div {
                width: $w;
                height: 48px;
                button {
                    width: 179px;
                    height: $w;
                    font-size: 20px;
                    color: $f;
                    text-align: center;
                    line-height: 48px;
                    background-color: #0288D1;
                    border: none;
                    margin-left: (628-179)/2+px;
                }
            }
        }
    }
}
</style>
