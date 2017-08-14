<<template>
  <div class="about-us-title">
        <div class="about-us-wrapper">
            <div class="line-left"></div>
            <div class="line-center"></div>
            <div class="line-right"></div>
            <div class="word">{{thisTransform}}</div>
        </div>
        <h2>{{thisTitle}}</h2>
    </div>
</template>

<script>
export default {
    name: 'title',
    data() {
        return {

        }
    },
    props: ['thisTitle', 'thisTransform']
}
</script>

<style lang="scss">
@import '../assets/scss/common.scss';
.about-us-title {
    width: 220px;
    height: 70px;
    position: relative;
    padding-top: 20px;
    margin: 0 auto;
    .about-us-wrapper {
        width: $w;
        height: 50px;
        line-height: 50px;
        text-align: center;
        overflow: hidden;
        .line-left {
            border-top: $b;
            border-left: $b;
            border-bottom: $b;
            float: left;
            width: 55px;
            height: $w;
        }
        .line-center {
            width: 220 - 110 +px;
            height: $w;
            border-bottom: $b;
            float: left;
        }
        .line-right {
            width: 55px;
            height: $w;
            border-top: $b;
            border-right: $b;
            border-bottom: $b;
            float: right;
        }
        .word {
            color: #999999;
            width: $w;
            height: 50px;
            position: absolute;
            top: 20px;
            right: 0;
            left: 0;
            line-height: 50px;
            text-align: center;
        }
    }
    h2 {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -47px;
        font-size: 24px;
    }
}
</style>

