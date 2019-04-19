<template>
  <div class="home">
    {{myjson}}
    <div v-for="(item,i) in myjson" :key="i">
      <label v-if="item.type === 'input'">
        {{item.label}}
        <input v-model="item.value">
      </label>
      <div v-else-if="item.type === 'radio'">
        <span>{{item.label}}</span>
        <label v-for="(option,j) in item.options" :key="`option-${i}-${j}`">
          {{option.label}}
          <input type="radio" :value="option.value" v-model="item.value">
        </label>
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
            { label: "选项2", value: 2 }
          ],
          value: ""
        }
      ]
    };
  }
};
</script>
