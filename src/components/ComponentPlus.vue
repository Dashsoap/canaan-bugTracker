<template>
    <div>
        <div v-for="(item,i) in myjson" :key="i">
            {{item}}      
        </div>
    </div>
</template>

<script>
    export default {
        name:"ComponentPlus",
   data() {
       return {
           key: value
       }
   },
    }
</script>

<style lang="less" scoped>

</style>