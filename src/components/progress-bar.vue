// progress-bar.vue
<template>
    <transition name="fade">
        <div class="progress-bar" v-if="isShow">
        </div>
    </transition>
</template>

<script>
let progressControl = (self,progress)=> {
    let step = self.step
    self.val = self.initVal        
    let timer = setInterval(() => {
        self.val = self.val + step
        self.$el.style.width = self.val + '%'
        // 父组件数据加载完前进度条最多到stopVal的这个百分值
        if (self.val >= progress) {
            clearInterval(timer)
            self.isShow = false;
            return self                
        }
    }, 10)
    return self;
}
export default {
    name:'progress-bar',
    data() {
        return {
            isShow: true, // 是否显示进度条
            val: 0, // 进度
        }
    },
    props: {
        /**
         * 每10毫秒自增幅度
         */
        step: {
            type: Number,
            default: 5,
        },
        /**
         * 初始值
         */
        initVal: {
            type: Number,
            default: 0,
        },
        /**
         * 到一定进度停止
         */
        stopVal: {
            type: Number,
            default: 100,
        },
        /**
         * 进度条继续到成功
         */
        isOk: {
            type: Boolean,
            default: false,
        },
    },
    created(){
        progressControl(this,100)
    },
    mounted() {
        // 初始化后加载进度，加载到百分之多少由stopVal决定
        //progressControl(this,100)
    },
}
</script>

<style lang="scss">
  .progress-bar {
    position:fixed;
    top :0;
    height :3px;
    width :0;
    background-color :red;
  }
  .fade {
    &-enter-active, &-leave-active {
      transition: all .3s;
    }
    &-enter, &-leave-active {
      opacity: 0;
    }
  }
</style>