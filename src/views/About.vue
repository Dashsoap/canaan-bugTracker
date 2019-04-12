<template>
  <div>
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
    </div>
    <!-- ----------------------------------------------- -->
    <!-- <div class="formContainer">
      <div class="myForm"></div>
      <div class="myDiv"></div>
    </div>-->
    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
      </a-steps>
      <div class="steps-content"></div>
      <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >Done</a-button>
        <a-button v-if="current>0" style="margin-left: 8px" @click="prev">Previous</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "First",
          content: "First-content"
        },
        {
          title: "Second",
          content: "Second-content"
        },
        {
          title: "Last",
          content: "Last-content"
        }
      ]
    };
  },
  methods: {
    gotoissues() {
      this.$router.push("/issues");
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
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
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.step {
  display: block;
}
</style>