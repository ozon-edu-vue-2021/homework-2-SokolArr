<template>
  <div id="app">
    <ul>
      <!--      {{ itemsData.name }}-->
      <tree-item
          :item="itemsData"
      />
    </ul>

  </div>
</template>

<script>
import TreeItem from "./components/TreeItem.vue";
import itemsData from "./uttils/data2.json";

export default {
  name: 'App',
  components: {
    TreeItem
  },
  data() {
    return {
      itemsData
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  font-size: 30px;
}
</style>
