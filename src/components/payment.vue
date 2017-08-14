<template>
    <div class="payment-main-wrapper">
        <div id="payment_content" style="margin-right: auto;margin-left: auto;">
            <div style="text-align: center;">
                <span style="text-align:center;font-size: 12px;font-weight: bold;color: #BE3E3F;">温馨提示：在支付时，请注意核对网站、收款商户、商品名称、支付金额等信息。警惕各种形式的网络诈骗行为！</span>
            </div>
            <br>
            <br>
            <table width="100%" align="center">
                <tbody>
                    <tr style="height: 50px;">
                        <td align="center" width="15%" style="border:none;"></td>
                        <td width="55%" style="border:none; text-align:center;font-size: 15px;font-weight: bold;color: red;">
                            <img src="../assets/images/syt2.png" alt=""> &nbsp; &nbsp; 注册成为会员精彩资讯无限阅览，会员收费120元/月</td>
                        <td width="15%" style="border: none;">&nbsp; </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr style="height: 50px;">
                        <td style="padding: 0;border-top-color: #6DB0E9;border-left-color:#6DB0E9;border-right-color:#6DB0E9; width: 100px;">
                            <img src="../assets/images//ylk.png" alt="">
                            <span style="text-align:left;font-size: 15px;font-weight: bold;">银行卡支付</span>
                        </td>
                        <td colspan="2" style="border:none;">&nbsp; </td>
                    </tr>
                    <tr style="height: 50px;">
                        <td style="font-size: 18px;font-weight: bold;" colspan="3">
                            <font style="font-size: 18px;font-weight: bold;">收款商户：北京普来科技服务有限公司</font>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <!-- <font style="text-align:right; font-size: 15px;font-weight: bold;color: #5CA3DD;">商品：注册会员</font>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                 <font style="font-size: 15px;font-weight: bold;color: red;">金额：20元</font>
                                </td>
                                -->
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <span style="text-align:left;font-size: 15px;font-weight: bold;color:blue;">输入银行卡号和银行预留手机号校验确认码即可支付:</span>
                            <br>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;">银行卡号：</span>
                            <input type="text" style="width: 200px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <span style="font-size: 12px;font-weight: bold;">预留手机号：</span>
                            <input type="text" style="width: 100px;"> &nbsp; &nbsp;
                            <input type="button" style="font-size: 12px;font-weight: bold;color: #0E59AA;" value="发送确认码">
                            <br>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;">&nbsp; &nbsp; 确认码：</span>
                            <input type="text" style="width: 100px;">&nbsp; &nbsp;
                            <input type="button" style="font-size: 12px;font-weight: bold;color: #BBBBBB;" value="确 定">
                            <br>
                            <br>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <h1>支持的全国性银行
                                <span style="font-weight: normal; color: #999">（20家）</span>
                            </h1>
                            <ul class="bankIcon">
                                <li>
                                    <a href="http://www.icbc.com.cn/" target="_blank">
                                        <img alt="中国工商银行" src="../assets/images/7f233d42-44d9-48a1-aff4-b01b25230628.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.abchina.com/" target="_blank">
                                        <img alt="中国农业银行" src="../assets/images/a76a8079-d6aa-4a69-b747-be5d8c8b1fef.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.boc.cn/" target="_blank">
                                        <img alt="中国银行" src="../assets/images/cc45dc96-b19b-431d-a559-de9e47b4a261.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.ccb.com/" target="_blank">
                                        <img alt="中国建设银行" src="../assets/images/c989368b-3230-4d1f-a3f6-8dab2fb9c68c.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.bankcomm.com/" target="_blank">
                                        <img alt="交通银行" src="../assets/images/eed688f2-b2cf-4b2a-981a-e77e589884f0.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.psbc.com/" target="_blank">
                                        <img alt="中国邮政储蓄银行" src="../assets/images/ec956ea8-b49c-48b3-b779-84e3f54ca1dc.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://bank.ecitic.com/" target="_blank">
                                        <img alt="中信银行" src="../assets/images/bf87fdbc-b752-4a9c-9e05-826af3868eaa.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.cebbank.com/" target="_blank">
                                        <img alt="中国光大银行" src="../assets/images/bf4e7615-fe0e-4219-9df9-9141d4c6b3a3.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.hxb.com.cn/" target="_blank">
                                        <img alt="华夏银行" src="../assets/images/08c641e7-a53d-4edd-b0d3-d39739de0f35.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.cmbc.com.cn/" target="_blank">
                                        <img alt="民生银行" src="../assets/images/caacd7d5-b79d-46da-a326-e593cdaa2b51.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.cgbchina.com.cn/" target="_blank">
                                        <img alt="广发银行" src="../assets/images/07a17b97-7652-45d8-8adb-cd91b150fc77.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://creditcard.cmbchina.com/" target="_blank">
                                        <img alt="招商银行" src="../assets/images/595cb1a0-318d-4ce6-9c6d-6523e6ddc113.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.cib.com.cn/" target="_blank">
                                        <img alt="兴业银行" src="../assets/images/62acd6a0-5f73-4658-b84a-1a1356af6acd.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://ebank.spdb.com.cn/" target="_blank">
                                        <img alt="浦发银行" src="../assets/images/ca3a4a40-0f2a-49c3-8ded-6236b6bdebdc.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://bank.pingan.com/" target="_blank">
                                        <img alt="平安银行" src="../assets/images/4f39ea59-d1d9-40cd-a6a1-954fa0474f7a.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.egbank.com.cn/" target="_blank">
                                        <img alt="恒丰银行" src="../assets/images/66d49b2e-cb1c-44b0-99b4-930e43eae648.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.cbhb.com.cn/" target="_blank">
                                        <img alt="渤海银行" src="../assets/images/f2da73f1-fef8-4c60-a1b4-8a15d1aa2847.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.czbank.com/czbank/" target="_blank">
                                        <img alt="浙商银行" src="../assets/images/44a05f0b-3264-4703-9ade-9f4cdaa187e7.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.bankofbeijing.com.cn/" target="_blank">
                                        <img alt="北京银行" src="../assets/images/8670b8f9-c204-4f30-a1d3-83310d673952.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.bankofshanghai.com/" target="_blank">
                                        <img alt="上海银行" src="../assets/images/a5f2821b-4e9d-4e96-a881-bc28bc3efbdb.gif" style="height: 33px; width: 122px">
                                    </a>
                                </li>
                            </ul>
                            <!--<iframe src="https://static.95516.com/static/page/morebank4pay/zh_CN/393.html" scrolling="no" frameborder="0" width="100%" height="150px"></iframe>-->
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <table align="center" width="100%" style="background-color: #E4F0FD;border-color: #93BAE1">
                <tbody>
                    <tr>
                        <td style="font-size: 15px;font-weight: bold;color: #6F9FD2">
                            常见问题
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span style="font-size: 12px;">1.银行卡支付需不需要开通网上银行？</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">答：快捷支付不需要开通网上银行，网上银行支付需要开通网上银行。</span>
                            <br>
                            <span style="font-size: 12px;">2.银行卡支付支持哪些类型的卡？</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">答：借记卡、信用卡。</span>
                            <br>
                            <span style="font-size: 12px;">3.如何修改预留手机号？</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">答：请确认您是否在银行已经预留手机号码，如未预留或已遗忘，请携带身份证及银行卡至银行网点柜台，告知银行工作人员修改成您的常用手机号码。</span>
                            <br>
                            <span style="font-size: 12px;">4.各家银行的支付限制额度相同吗？</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">答：不同银行开放的支付额度不同，每家银行根据不同的用卡条件（短信验证码、UKey）设定不同的支付额度。</span>
                            <br>
                            <span style="font-size: 12px;">5.造成“支付被拒绝”的原因有哪些？</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">答：（1）所持银行卡尚未开通网上在线支付功能。</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">（2）所持银行卡已过期、作废、挂失。</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">（3）所持银行卡内余额不足。</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">（4）输入银行卡或预留手机号码有误。</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">（5）银行系统数据传输出现异常。</span>
                            <br>
                            <span style="font-size: 12px;font-weight: bold;color: #7B7D80">（6）网络中断。</span>
                            <br>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="height: 100px">
            &nbsp;
        </div>
    </div>
</template>
<script>
    export default{
        name:'payment',
        data(){
            return{

            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/common.scss";
    #payment_content{
	margin:0 auto;
	margin-top: 40px;
	width:1024px;
}

#payment_title{
	width: 100%;
	padding-bottom: 20px;
	border-bottom: 1px solid #c6c6c6;
}

#payment_table{
	margin-top: 40px;
	width: 100%;
}

#payment_table tbody tr td{
	padding-top: 30px;
}

#payment_table tbody tr td p{
	font-size: 13px;
	vertical-align: top;
	color: #034476;
}
</style>
