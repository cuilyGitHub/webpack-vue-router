<template>
    <div>
        <h2>Ecosystem</h2>
        <ul>
            <li v-for="(i,index) in ecosystemSrc"><a v-bind:href="i" v-bind:target="target">{{ecosystemName[index]}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ecosystem',
        data () {
            return {
                ecosystemSrc:["http://router.vuejs.org/","http://vuex.vuejs.org/","http://vue-loader.vuejs.org/","https://github.com/vuejs/awesome-vue"],
                ecosystemName:['vue-router','vuex','vue-loader','awesome-vue',],
                target:'_blank'
            }
        }
    }
</script>

<style>

</style>