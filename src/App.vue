<template>
  <div id="app">
    <top-menu></top-menu>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import TopMenu from "@/components/TopMenu.vue";
export default {
  components: {
    TopMenu
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .container{
    padding-top:200px
  }
}
</style>
<script>
import Antd from "ant-design-vue";

export default {};
</script>

