<template>
  <div id="app">
    <ul>
      <tree class="tree-list"
            :tree-data="itemsData"
      />
    </ul>

  </div>
</template>

<script>

import itemsData from "./uttils/data2.json";
import Tree from "./components/Tree.vue";

export default {
  name: 'App',
  components: {Tree},
  data() {
    return {
      itemsData,
      Tree
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

