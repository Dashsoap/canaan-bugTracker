<template>
  <div>
    <div>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="1"></a-col>
        <a-col :span="11">
          <h3>新问题向导</h3>
        </a-col>
        <a-col :span="6"></a-col>
      </a-row>
    </div>
    <div>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="1" :order="2">
          <div class="content">
            <a-steps direction="vertical" :current="current">
              <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
            </a-steps>
          </div>
        </a-col>
        <a-col :span="11" :order="2">
          <div class="steps-content" v-if="current===0">
            <div class="wizbody">
              <h4>欢迎</h4>
              <p>我们希望您输入最佳的问题报告，以便项目团队成员可以有效地采取行动。以下步骤将帮助您将问题发送给正确的人。</p>
            </div>
            <div class="wizbody">
              <h4>确认版本号</h4>
              <p>请确认下列信息是否正确</p>
              <a-row style="height:32px">
                <a-col :span="3" class="make-vertical">
                  <div>SDK 版本号:</div>
                </a-col>
                <a-col :span="2">
                  <a-select defaultValue="V0.5.3" style="width: 120px" @change="handleChange">
                    <a-select-option value="none">无</a-select-option>
                    <a-select-option value="0.5.3">V0.5.3</a-select-option>
                    <a-select-option value="0.7.0">V0.7.0</a-select-option>
                  </a-select>
                </a-col>
              </a-row>
              <a-row style="height:32px">
                <a-col :span="3" class="make-vertical">
                  <div>HDK 版本号:</div>
                </a-col>
                <a-col :span="2">
                  <a-select defaultValue="无" style="width: 120px" @change="handleChange">
                    <a-select-option value="none">无</a-select-option>
                    <a-select-option value="0.1.0">V0.1.0</a-select-option>
                    <a-select-option value="0.2.0">V0.2.0</a-select-option>
                  </a-select>
                </a-col>
              </a-row>
              <a-row style="height:32px">
                <a-col :span="3" class="make-vertical">
                  <div>ToolChain:</div>
                </a-col>
                <a-col :span="2">
                  <a-select
                    defaultValue="Kendryte OpenOCD for Ubuntu x86_64(V 0.1.3)"
                    style="width: 120px"
                    @change="handleChange"
                  >
                    <a-select-option value="none">无</a-select-option>
                    <a-select-option value="0.5.3">Kendryte OpenOCD for win32(V0.1.3)</a-select-option>
                    <a-select-option value="0.7.0">Kendryte OpenOCD for Ubuntu x86_64(V 0.1.3)</a-select-option>
                  </a-select>
                </a-col>
              </a-row>
            </div>
            <div class="wizbody">
              <h4>帮助避免重复的问题报告</h4>
              <a-checkbox @change="onChange">我搜索了 已经报告此问题的现有问题。</a-checkbox>
            </div>
          </div>

          <div class="steps-content" v-if="current===1">
            
<home></home>
          </div>
        </a-col>
        <a-col :span="6"></a-col>
      </a-row>
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
import Home from "./Home/Home.vue";
export default {
  name: "about",
  components: {
    Home
  },
  data() {
    return {
      current: 0,
      isread: false,
      steps: [{}, {}, {}]
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
  min-height: 400px;
  text-align: center;
}
.content {
  display: flex;
  min-height: 400px;
  margin-top: 16px;
  border-radius: 6px;
  .ant-steps-item-tail {
    height: 100px;
  }
}
.steps-action {
  margin-top: 24px;
  text-align: center;
}
.step {
  display: block;
}

h3 {
  margin-top: 1rem;
  font-size: medium;
  margin-bottom: 0;
  background: #e5ecf9;
  border-top: 1px solid #3366cc;
  padding: 0.5ex 0.5em 0.5ex 0.5em;
}
.wizbody {
  background: #eee;
  border: 1px solid #ddd;
  padding: 1em;
  margin-bottom: 1em;
}
.make-vertical {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>