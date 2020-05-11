<template>
  <h2 class="ttl_h2">{{text}}</h2>
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
// @import "../../scss/_color.scss";
@import "../../scss/_common.scss";

// .ttl_h2 {
//   font-size: 3rem;
//   color: $black;
//   background: url(/img/h2.svg) left top no-repeat;
//   padding-left: 3.6rem;
//   padding-bottom: 0.5rem;
//   background-size: 3rem;
//   border-bottom: dashed 3px $sell_green_dark;
//   margin-bottom: 2.8rem;
// }
</style>
