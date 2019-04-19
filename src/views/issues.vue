<template>
  <a-table :columns="columns" :dataSource="data" @change="handleChange"/>
</template>

<script>
const data = [
  {
    key: "1",
    title: "i have a bug to baogao1",
    owner: "John Brown",
    status: "Unfixed",
    age: 32,
    tag: "normal",
    summary: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    title: "i have a bug to baogao2",
    status: "Untrigger",
    owner: "Jim Green",
    age: 42,
    tag: "normal",

    summary: "London No. 1 Lake Park"
  },
  {
    key: "3",
    title: "i have a bug to baogao3",
    status: "Fixed",
    owner: "Joe Black",
    age: 32,
    tag: "normal",
    summary: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    title: "i have a bug to baogao",
    status: "Fixed",
    owner: "Jim Red",
    age: 32,
    tag: "Emergency",
    summary: "London No. 2 Lake Park"
  }
];
export default {
  name: "issues",
  data() {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null,
      aa: {}
    };
  },
  computed: {
    columns() {
      let { sortedInfo, filteredInfo } = this;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [
        {
          title: "ID",
          dataIndex: "key",
          key: "key",
          filteredValue: filteredInfo.key || null,
          sorter: (a, b) => a.key - b.key,
          sortOrder: sortedInfo.columnKey === "key" && sortedInfo.order
        },
        {
          title: "Stars",
          dataIndex: "age",
          key: "age",
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order
        },
        {
          title: "Owner",
          dataIndex: "owner",
          key: "owner",
          filteredValue: filteredInfo.owner || null,
          sorter: (a, b) => a.owner.length - b.owner.length,
          sortOrder: sortedInfo.columnKey === "owner" && sortedInfo.order
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
          filteredValue: filteredInfo.title || null,
          sorter: (a, b) => a.title.length - b.title.length,
          sortOrder: sortedInfo.columnKey === "title" && sortedInfo.order
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          filters: [
            { text: "Untrigger", value: "Untrigger" },
            { text: "Unfixed", value: "Unfixed" },
            { text: "Fixed", value: "Fixed" }
          ],
          filteredValue: filteredInfo.status || null,
          onFilter: (value, record) => record.status.includes(value),
          sorter: (a, b) => a.status.length - b.status.length,
          sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order
        },
        {
          title: "Tag",
          dataIndex: "tag",
          key: "tag",
          sorter: (a, b) => a.tag.length - b.tag.length,
          sortOrder: sortedInfo.columnKey === "tag" && sortedInfo.order
        },
        {
          title: "摘要",
          dataIndex: "summary",
          key: "summary",
          //   filters: [
          //     { text: "London", value: "London" },
          //     { text: "New York", value: "New York" }
          //   ],
          filteredValue: filteredInfo.summary || null,
          //   onFilter: (value, record) => record.summary.includes(value),
          sorter: (a, b) => a.summary.length - b.summary.length,
          sortOrder: sortedInfo.columnKey === "summary" && sortedInfo.order
        }
      ];
      return columns;
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleChange(pagination, filters, sorter) {
      console.log("Various parameters", pagination, filters, sorter);
      this.filteredInfo = filters;
      this.sortedInfo = sorter;
    },
    clearFilters() {
      this.filteredInfo = null;
    },
    clearAll() {
      this.filteredInfo = null;
      this.sortedInfo = null;
    },
    setAgeSort() {
      this.sortedInfo = {
        order: "descend",
        columnKey: "age"
      };
    },
    getList() {
      axios
        .get("http://yapi.demo.qunar.com/mock/63548/getlist")
        .then(response => {
          this.data = response.data.data;
          console.log(this.aa);
        });
    }
  }
};
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>