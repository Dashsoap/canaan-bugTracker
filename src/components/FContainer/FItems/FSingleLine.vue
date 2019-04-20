<template>
    <div>
        <a-input v-model="src.value"></a-input>
    </div>
</template>

<script>
    export default {
        props:{
            src:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>

</style>