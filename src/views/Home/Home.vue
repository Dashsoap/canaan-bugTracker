<template>
  <div class="home">
    {{myjson}}
    <f-container :src="myjson"></f-container>
  </div>
</template>

<script>
import source from './data/source';
import Loading from '../../components/Loading.vue';
export default {
  name: "home",
  data(){
    return {
      myjson: [],
    }
  },
  components:{
     FContainer: () => {
       return {
         component: import('../../components/FContainer/FContainer.vue'),
         loading: Loading,
       }
    }
  },
  async created(){
    this.myjson = source;
  }
};
</script>
<style lang="less" scoped>
.select-div{
  width: 150px;
}
</style>

