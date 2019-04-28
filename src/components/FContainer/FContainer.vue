<template>
  <div>
    <div v-for="(item,i) in src" key="i" class="wizbody">
      <h4>{{item.title}}</h4>
      <p>{{item.description}}</p>
      <component v-for="(content,j) in item.fitems" :is="content.type" :src="content" :key="`i-j`"></component>
      {{item.fitems}}
    </div>
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
  },
  mounted() {
    this.logs();
  },
  methods: {
    logs() {
      console.log(this.src);
    }
  }
};
</script>

<style lang="less" scoped>
.wizbody {
  background: #eee;
  border: 1px solid #ddd;
  padding: 1em;
  margin-bottom: 1em;
}
</style>