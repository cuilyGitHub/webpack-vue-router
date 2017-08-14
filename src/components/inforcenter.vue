<template>
    <div class="infor-center-main-wrapper">
        <title-template this-title="资讯中心" this-transform="Information Center"></title-template>
        <div id="infor_center_content">
    
            <table id="infor_center_table">
                <tbody>
                    <tr v-for="i in msg">
                        <td align="left">
                            <a href="javascript:void(0)">{{i.discribe}}</a>{{allDate}}</td>
                        <td align="right">{{i.creatTime}}</td>
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
import TitleTemplate from '../components/title.vue';

export default {
    name: 'inforcenter',
    data() {
        return {
            msg:[
                {
                    discribe:"结对编程是每个软件公司都该采用的开发方式",
                    creatTime:"2017-07-30",
                },{
                    discribe:"全景VR视频播放器：VLC 360° 预览版发布",
                    creatTime:"2017-07-30",
                },{
                    discribe:"Libratone：让设计更纯粹，让聆听更自由",
                    creatTime:"2017-07-30",
                },{
                    discribe:"深化智能化价值转型 鼎捷与制造企业共赴智能制造未来",
                    creatTime:"2017-07-30",
                },{
                    discribe:"百度云智峰会 核心关键词都在这里了",
                    creatTime:"2017-07-30",
                },{
                    discribe:"智能思维引擎One Mind 让Flyme 6充满无限可能",
                    creatTime:"2017-07-30",
                },{
                    discribe:"聚力网络强国·聚焦产业发展——首届中国网信产业前锋汇",
                    creatTime:"2017-07-30",
                },{
                    discribe:"物联网爆发在即，这些企业你不可不关注",
                    creatTime:"2017-07-30",
                },{
                    discribe:"腾讯阿里角力金融云，云计算用户争夺深入传统行业",
                    creatTime:"2017-07-30",
                },{
                    discribe:"从手机投屏与群控，Total Control完美演绎多屏互动",
                    creatTime:"2017-07-30",
                },{
                    discribe:"有信源通讯：让技术来解决房产平台服务质量监控难题",
                    creatTime:"2017-07-30",
                },
            ],
            allDate:"(10元/条)"
        }
    },
    components:{
        TitleTemplate
    }
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";
#infor_center_content {
    width: 1200px;
    margin: 0 auto;
}

#infor_center_title {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #c6c6c6;
}

#infor_center_table {
    margin-top: 40px;
    width: 100%;
}

#infor_center_table tbody tr td {
    padding-top: 30px;
    border: none;
    font-size: 16px;
}

#infor_center_table td a {
    font-size: 18px;
    text-decoration: underline;
}

#infor_center_table td a:hover {
    color: #0288D1;
}

#infor_center_table tbody tr td p {
    font-size: 13px;
    vertical-align: top;
    color: #034476;
}
</style>

