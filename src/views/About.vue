<template>
  <div>
    <tr class="aboutTitle">
      <td class="canaanimg">
        <img src="../assets/Canaan.png" @click="homepoint()">
      </td>
      <td @click="gotoissues()">
        <h1>Canaan</h1>
        <div>一个超级无敌牛逼的 IC 公司</div>
      </td>
    </tr>

    <!-- ----------------------------------------------- -->
    
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    gotoissues() {
      this.$router.push("/issues");
    }
  }
};
</script>

<style lang="less" scoped>
.aboutTitle {
  height: 5rem;
  table {
    border-collapse: separate;
    border-spacing: 2px;
  }
  td {
    img {
      width: 4rem;
      height: auto;
      margin: 0.5rem;
    }
    h1 {
      margin: 0;
      cursor: pointer;
    }
    div {
      cursor: pointer;
    }
  }
  .canaanimg {
    margin-right: 5rem;
  }
}
</style>