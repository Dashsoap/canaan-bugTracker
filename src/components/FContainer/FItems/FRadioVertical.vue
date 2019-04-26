<template>
  <div>
    <a-row type="flex" justify="left">
      <a-col :span="2">
        <label>{{src.label}}:</label>
      </a-col>
      <a-col :span="8">
        <a-radio-group v-model="src.value" class="f-radio">
          <a-radio v-for="(item,i) in src.options" :key="i" :value="item.value">{{item.label}}</a-radio>
        </a-radio-group>
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
.f-radio {
}
</style>