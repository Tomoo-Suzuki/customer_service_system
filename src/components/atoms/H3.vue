<template>
  <h3 class="ttl_h3">{{ text }}</h3>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "../../scss/_common.scss";
</style>
