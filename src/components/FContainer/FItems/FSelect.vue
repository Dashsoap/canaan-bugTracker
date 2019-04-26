<template>
  <div>
    <a-row class="flex" justify="left">
      <a-col span="2">
        <!-- <a-tooltip placement="topLeft" :title="src.tip"> -->
        <label>{{src.label}}:</label>
        <!-- </a-tooltip> -->
      </a-col>
      <a-col span="8">
        <a-select style="width: 120px" v-model="src.value">
          <a-select-option
            v-for="(option,i) in src.options"
            :key="i"
            :value="option.value"
          >{{option.label}}</a-select-option>
        </a-select>
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