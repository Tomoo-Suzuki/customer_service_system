<template>
  <h5 class="ttl_h2">{{ text }}</h5>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
});
</script>
<style lang="scss" scoped>
@import "../../scss/_common.scss";
</style>
