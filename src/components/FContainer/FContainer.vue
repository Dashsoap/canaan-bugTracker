<template>
  <div>
      <component v-for="(item,i) in src" :is="item.type" :key="i" :src="item"></component>
  </div>
</template>

<script>
import "./FItems";
export default {
  props: {
    src: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
</style>