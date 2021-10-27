<template>
  <li>
    <div class="file-wrapper" v-if="isFile">
      <FileItem :file-name="item.name"/>
    </div>

    <div class="link-wrapper" v-if="isLink">
      <LinkItem :link-name="item.name"/>
    </div>

    <div class="folder-wrapper" v-if="isFolder" @click="toggle">

      <img
          @click="toggle"
          src="../assets/folder.png"
          class="folderIcon"
          style="cursor: pointer"
      />

      {{ item.name }}
    </div>

    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
          class="item"
          v-for="content in item.contents"
          :key="content.name"

          :item="content"
      />
    </ul>
  </li>

</template>

<script>
import FileItem from "./FileItem.vue";

import LinkItem from "./LinkItem.vue";

export default {
  name: "TreeItem",
  components: {
    FileItem,
    LinkItem
  },
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
      if (this.item.type === "directory") return true;
      else return false;
    },
    isFile() {
      if (this.item.type === "file") return true;
      else return false;
    },
    isLink() {
      if (this.item.type === "link") return true;
      else return false;
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
  height: 33px;
  margin-right: 5px;
}

.folder-wrapper {
  display: flex;
  align-items: center;
}

.folder-wrapper:hover {
  border: solid 2px #4a70fb;
  border-radius: 10px;
  cursor: pointer;
}

.file-wrapper {
  display: flex;
  align-items: center;

}

.file-wrapper:hover {
  border: solid 2px #fbe74a;
  border-radius: 10px;
  cursor: pointer;

}

.link-wrapper {
  display: flex;
  align-items: center;

}

.link-wrapper:hover {
  border: solid 2px #4a70fb;
  border-radius: 10px;
  cursor: pointer;

}

li {
  list-style-type: none;
}
</style>