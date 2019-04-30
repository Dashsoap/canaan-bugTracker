<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 ,background:'#fff'}"
    >
      <div class="sidebar-star">由{{data.star}}位用户反馈了此问题</div>
      <div class="side-content-item">
        <div class="side-content-left">状态:</div>
        <div class="side-content-right">{{data.status}}</div>
      </div>
      <div class="side-content-item">
        <div class="side-content-left">所有者:</div>
        <div class="side-content-right">
          <label v-for="(item,i) in data.owner" :key="i">
            {{item}}
            <br>
          </label>
        </div>
      </div>
      <div class="side-content-item">
        <div class="side-content-left">抄送:</div>
        <div class="side-content-right">
          <label v-for="(item,j) in data.Cc" :key="j">
            {{item}}
            <br>
          </label>
        </div>
      </div>
      <div class="side-content-item">
        <div class="side-content-left">产品:</div>
        <div class="side-content-right">{{ data.production }}</div>
      </div>
      <div class="side-content-item">
        <div class="side-content-left">最后修改于:</div>
        <div class="side-content-right">{{ data.type }}</div>
      </div>
      <div class="side-content-item">
        <div class="side-content-left">类型:</div>
        <div class="side-content-right">{{ data.type }}</div>
      </div>
      <div class="side-content-item">
        <div class="side-content-left">OS:</div>
        <div class="side-content-right">{{data.os}}</div>
      </div>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <div>
        <h3>Issue {{data.id}}:{{data.title}}</h3>
        <label>Reported by {{data.uploader}} on {{data.uploadTime}}</label>
      </div>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div>
          <a-steps :current="1">
            <a-popover slot="progressDot" slot-scope="{index, status, prefixCls}">
              <template slot="content">
                <span>step {{index}} status: {{status}}</span>
              </template>
              <span :class="`${prefixCls}-icon-dot`"></span>
            </a-popover>
            <a-step title="Finished" description="You can hover on the dot."/>
            <a-step title="In Progress" description="You can hover on the dot."/>
            <a-step title="Waiting" description="You can hover on the dot."/>
            <a-step title="Waiting" description="You can hover on the dot."/>
          </a-steps>
        </div>
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'left' }">
          <div>OS:{{data.os}}</div>
          <div>
            Stps:
            <br>
            <div v-for="(content,i) in data.steps" :key="content">
              {{i+1}})
              {{content}}
              <br>
            </div>
          </div>
          <div v-for="(item,i) in data.commit" :key="item" class="comment">
            <div class="comment-header">
              <label>comment{{i+1}} By : {{item.owner}} on {{item.time}}</label>
            </div>
            {{item.content}}
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">Canaan ©2018 Created by R&D Product</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      data: {}
    };
  },
  // computed: {

  // },
  watch: {
    data(newValue, oldValue) {
      console.log(oldValue);
      return newValue;
    }
  },
  created() {
    this.getIssue();
    this.getModify(this.time);
  },
  methods: {
    getIssue() {
      axios
        .get(`/issue?id=${this.$route.params.id}`)
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {});
      console.log(this.$route.params.id);
    },
    getModify(time) {
      console.log(time);
    }
  }
};
</script>

<style lang="less" scoped>
.sidebar-star {
  text-align: center;
}
.side-content-item {
  padding: 0.5rem;
  white-space: nowrap;
  .side-content-left {
    text-align: left;
    display: inline-block;
    width: 40%;
    vertical-align: top;
  }
  .side-content-right {
    text-align: left;
    white-space: nowrap;
    display: inline-block;
  }
}
.comment {
  margin-bottom: 10px;
  border: 1px solid white;
  .comment-header {
    background-color: rgb(244, 249, 241);
  }
}
.comment:hover {
  border: 1px solid black;
}
</style>