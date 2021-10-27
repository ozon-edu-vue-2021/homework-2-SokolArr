<template>
  <li>

    <div @click="toggle" class="wrapper">
      <img v-if="isFolder" src="../assets/folder.png" class="folderIcon" style="cursor: pointer"/>
      {{ item.name }}
    </div>

    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
          class="item"
          v-for="(content, index) in item.contents"
          :key="index"

          :item="content"
      />
    </ul>
  </li>

</template>

<script>
export default {
  name: "TreeItem",
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder() {
      return this.item.contents && this.item.contents.length;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
  }
}
</script>

<style scoped>

.folderIcon {
  height: 30px;
  margin-right: 5px;
}

.wrapper {
  display: flex;
  align-items: center;
}

li {
  list-style-type: none;
}
</style>