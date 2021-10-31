<template>
  <div
      style="display: inline-flex; align-items: center"
      
  >
    <img
        src="../assets/link.png"
        class="linkIcon"
        alt="img"
    />
    <p class="link-text">{{ linkName }}</p>
  </div>
</template>

<script>
export default {
  name: "LinkItem",
  props: {
    linkName: {
      type: String,
      default: "",
    }
  }
}
</script>

<style scoped>
.linkIcon {
  height: 25px;
  margin-right: 5px;
}

.link-text {
  margin: 0;
  font-size: 20px;
  font-style: italic;
  text-decoration: underline;
  color: blue;
}
</style>