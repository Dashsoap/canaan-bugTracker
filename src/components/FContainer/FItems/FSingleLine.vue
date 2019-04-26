<template>
  <div>
    <a-row type="flex" justify="left">
      <a-col span="2">
        <label>{{src.label}}:</label>
      </a-col>
      <a-col span="8">
        <a-input v-model="src.value"></a-input>
      </a-col>
    </a-row>
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