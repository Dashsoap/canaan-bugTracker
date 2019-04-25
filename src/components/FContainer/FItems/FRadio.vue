<template>
  <div>
    <a-radio-group v-model="src.value">
      <label>{{src.label}}:</label>
      <a-radio v-for="(item,i) in src.options" :key="i" :value="item.value">{{item.label}}</a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
</style>