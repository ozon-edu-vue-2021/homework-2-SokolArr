<template>
  <div id="app">
    <h2 style="text-align: center">My Tree</h2>
    Selected files:
    <div
        v-for="name in selectedItemsNames"
        :key="name"
        style="display: inline-flex"
    >
      {{ name }}, &nbsp;
    </div>


    <ul>
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
      itemsData,
      selectedItemsNames: [],
    }
  },
  methods: {
    updateSelected(item, isSelected) {
      if (isSelected) {
        console.log(item.name, `,selected: ${isSelected}`);
        this.selectedItemsNames.push(item.name);
      } else {
        console.log(item.name, `,selected: ${isSelected}`);
        this.selectedItemsNames = this.selectedItemsNames.filter(el => el !== item.name);
      }
    }
  },
  mounted() {
    let vm = this;
    this.$root.$on('selected', function (item, isSelected) {
      vm.updateSelected(item, isSelected)
    })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  font-size: 27px;
}
</style>
