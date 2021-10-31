<template>
  <li>
    <div
        :class="className"
        v-if="isFile"
        @click="fileHandler(item)"
    >
      <FileItem :file-name="item.name"/>

    </div>

    <div class="link-wrapper"
         v-if="isLink"
    >
      <LinkItem :link-name="item.name"/>
    </div>

    <div class="folder-wrapper" v-if="isFolder" @click="toggle">

      <img

          src="../assets/folder.png"
          class="folderIcon"
          style="cursor: pointer"
          alt="img"/>

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
      isOpen: false,
      className: 'file-wrapper',
      isSelectedFlag: false
    };
  },
  computed: {
    isFolder() {
      return this.item.type === "directory";
    },
    isFile() {
      return this.item.type === "file";
    },
    isLink() {
      return this.item.type === "link";
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    fileHandler(item) {
      // let vm = this;
      // this.$root.$on('is-selected', function (answEv) {
      //   if (answEv) {
      //
      //   }
      // });

      if (this.isSelectedFlag) {
        this.className = 'file-wrapper';
      } else {
        this.className = 'file-wrapper_isSelected'
      }
      this.isSelectedFlag = !this.isSelectedFlag;
      this.$root.$emit('selected', item, this.isSelectedFlag)
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
  margin: 2px;

}

.file-wrapper:hover {
  border: solid 2px #fbe74a;
  border-radius: 10px;
  cursor: pointer;

}

.file-wrapper_isSelected {
  display: flex;
  align-items: center;
  border: solid 2px #fbe74a;
  border-radius: 10px;
  cursor: pointer;
  background: #fbe74a;
  margin: 2px;
}

.file-wrapper_isSelected:hover {
  border: solid 2px #b2a636;
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