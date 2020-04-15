<template>
  <footer>
    <ToTop />
    <NavFooter />
    <MenuFooter />
    <div>copyright</div>
  </footer>
</template>
<script>
import ToTop from "../atoms/ToTop.vue";
import NavFooter from "../atoms/NavFooter.vue";
import MenuFooter from "../atoms/MenuFooter.vue";
export default {
  components: {
    ToTop,
    NavFooter,
    MenuFooter
  },
  props: {}
};
</script>
<style lang="scss" scoped>
// @import "../../scss/reset";
// @import "../../scss/common";
</style>
