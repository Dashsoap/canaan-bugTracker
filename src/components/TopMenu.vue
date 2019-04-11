<template>
  <div class="header">
    <img src="../assets/Canaan.png">
    <h1>Canaan Bug</h1>
    <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" href="#">
      Click me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a href="http://www.kendryte.com/">勘智k210</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3">3rd menu item</a-menu-item>
    </a-menu>
  </a-dropdown>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
};
</script>

<style lang="less" scoped>
.header {
  box-sizing: border-box;
  height: 2.5rem;
  background: hsl(0, 0%, 100%);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 800;
  top: 0;
  border-bottom: 2px solid #efefef;
  position: fixed;
  padding: 0 4px;
  img {
    width: 2rem;
    height: auto;
    margin: 0 0.5rem 0 1.8rem;
  }
  h1 {
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
  }
}
</style>