<template>
  <li class="node-tree">

    <span class="label">{{ node.name }}</span>
    
    <ul v-if="node.contents && node.contents.length">

      <TreeNode
          v-for="child in node.contents"
          :key="child.name"
          :node="child"
      />

    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>