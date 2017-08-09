<template>
    <div>
        <h2>Essential Links</h2>
        <ul>
            <li v-for="(i,index) in descriptionStation"><a v-bind:href="i" v-bind:target="target">{{descriptionName[index]}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'essential',
        data () {
            return {
                descriptionStation:["https://vuejs.org","https://forum.vuejs.org","https://gitter.im/vuejs/vue","https://twitter.com/vuejs"],
                descriptionName:['Core Docs','Forum','Gitter Chat','Twitter'],
                target:'_blank'
            }
        }
    }
</script>

<style>

</style>