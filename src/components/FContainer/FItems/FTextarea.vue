<template>
  <div>
    <label>{{src.label}}:</label>
    <a-row type="flex" justify="left">
      <a-col span="8">
        <a-textarea v-model="src.value" class="f-textarea"></a-textarea>
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
.f-textarea {
}
</style>