<template>
  <div class="header" v-if="isVisible">
    <img src="../assets/Canaan.png" @click="homepoint()">
    <h1>Canaan Bug</h1>
    <a-dropdown :trigger="['click']" class="dropdown">
      <a class="ant-dropdown-link" href="#">
        选择报告产品
        <a-icon type="down"/>
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="http://www.kendryte.com/">勘智k210</a>
        </a-menu-item>

        <a-menu-item>
          <a href="http://forum.kendryte.com/">勘智论坛</a>
        </a-menu-item>
        <a-menu-item>
          <a href="https://github.com/kendryte/kendryte-ide">勘智IDE</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-button type="primary" @click="createIssue()">提交新的 issues</a-button>
    <a-input-group compact class="my-input">
      <a-select defaultValue="Option1">
        <a-select-option value="Option1">kendryte</a-select-option>
        <a-select-option value="Option2">IDE</a-select-option>
      </a-select>
      <a-input style="width: 80%" defaultValue/>
    </a-input-group>
    <!-- <div class="user">
      <a-button type="primary" v-if="!user.name">login</a-button>
      <a-dropdown :trigger="['click']" class="dropdown" v-else>
        <a class="ant-dropdown-link" href="#">
          {{user.name}}
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <div>个人中心</div>
          </a-menu-item>

          <a-menu-item key="1">
            <div>注销</div>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      user: { name: "123" }
    };
  },
  methods: {
    createIssue() {
      this.$router.push("about");
    },
    homepoint() {
      this.$router.push("issues");
    }
  },
  computed: {
    isVisible() {
      const nameList = [];
      return !nameList.includes(this.$route.name);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  height: 2.5rem;
  background: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // z-index: 800;
  // position: fixed;
  border-bottom: 2px solid #efefef;
  padding: 0 4px;
  img {
    width: 2rem;
    height: auto;
    margin: 0 0.5rem 0 1.8rem;
  }
  h1 {
    font-weight: 400;
    font-size: 1.2rem;
    margin: 0 2rem 0 0;
    white-space: nowrap;
  }

  .dropdown {
    margin-right: 2rem;
    white-space: nowrap;
    text-decoration: none;
  }

  .my-input {
    margin-left: 2rem;
  }
}
</style>