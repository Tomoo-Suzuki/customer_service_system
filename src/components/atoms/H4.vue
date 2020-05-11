<template>
  <h4 class="ttl_h2">{{text}}</h4>
</template>
<script>
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
