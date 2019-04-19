<template>
  <div class="home">
    {{myjson}}
    <div v-for="(item,i) in myjson" :key="i">
      <div v-if="item.type === 'input'">
        <label>
          {{item.label}}
          <a-input v-model="item.value"/>
        </label>
      </div>

      <div v-else-if="item.type === 'radio'">
        <!-- <span>{{item.label}}</span>
        <label v-for="(option,j) in item.options" :key="`option-${i}-${j}`">
          {{option.label}}
          <input type="radio" :value="option.value" v-model="item.value">
        </label>-->
        <!-- <a-radio-group :option="item.options" v-model="item.value" buttonStyle="solid">
          <a-radio v-for="(option,j) in item.options" :key="`option-${i}-${j}`">{{option.label}}</a-radio>
        </a-radio-group>-->
        <label>{{item.label}}:</label>
        <a-radio-group :options="item.options" v-model="item.value"/>
      </div>

      <div v-else-if="item.type==='select'" class="select-div">
        <span>{{item.label}}</span>
        <a-select
          v-model="item.value"
          style="width: 100%"
        >
           <a-icon slot="suffixIcon" type="smile" />
          <a-select-option v-for="(option,k) in item.options" :key="`option-${k}`" :value="option.value">{{option.label}}</a-select-option>
        </a-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      myjson: [
        { type: "input", label: "姓名", value: "" },
        { type: "input", label: "年龄", value: "" },
        {
          type: "radio",
          label: "单选",
          options: [
            {
              label: "选项1",
              value: 1
            },
            { label: "选项2", value: 2 },
            { label: "选项3", value: 3 }
          ],
          value: ""
        },
        {
          type: "select",
          label: "产品",
          value: "",
          options: [
            {
              label: "选项1",
              value: 1
            },
            { label: "选项2", value: 2 },
            { label: "选项3", value: 3 }
          ]
        },
                {
          type: "select",
          label: "问题",
          value: "",
          options: [
            {
              label: "选项1",
              value: 1
            },
            { label: "选项2", value: 2 },
            { label: "选项3", value: 3 }
          ]
        },
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.select-div{
  width: 150px;
}
</style>

