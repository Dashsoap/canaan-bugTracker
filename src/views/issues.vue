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
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    title: "i have a bug to baogao2",
    status: "fixed",

    owner: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    title: "i have a bug to baogao3",
    status: "fixed",

    owner: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    title: "i have a bug to baogao",
    status: "fixed",

    owner: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];
export default {
  name: "issues",
  data() {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null
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
          title: "Stars",
          dataIndex: "age",
          key: "age",
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
          filters: [
            { text: "London", value: "London" },
            { text: "New York", value: "New York" }
          ],
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.address.includes(value),
          sorter: (a, b) => a.address.length - b.address.length,
          sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order
        }
      ];
      return columns;
    }
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