<template>
  <div
      style="display: inline-flex; align-items: center"
  >
    <img
        src="../assets/file.png"
        class="fileIcon"
        alt="img"
    />
    <p class="file-text">{{ fileName }}</p>
  </div>
</template>

<script>
export default {
  name: "FileItem",
  props: {
    fileName: {
      type: String,
      default: "",
    },
    selected: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {}
}
</script>

<style scoped>
.fileIcon {
  height: 25px;
  margin-right: 5px;
}

.file-text {
  margin: 0;
  font-size: 20px;
}
</style>