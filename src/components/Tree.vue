<template>
  <div class="tree">
    <ul class="tree-list">
      <TreeNode
          :node="treeData"/>
    </ul>
  </div>
</template>

<script>

import TreeNode from './TreeNode.vue';

export default {
  name: 'Tree',
  components: {
    TreeNode
  },
  props: {
    treeData: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>