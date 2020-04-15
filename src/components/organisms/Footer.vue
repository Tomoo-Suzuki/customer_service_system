<template>
  <footer>
    <ToTop />
    <NavFooter />
    <MenuFooter />
    <Copyright />
  </footer>
</template>
<script>
import ToTop from "../atoms/ToTop.vue";
import NavFooter from "../atoms/NavFooter.vue";
import MenuFooter from "../atoms/MenuFooter.vue";
import Copyright from "../atoms/Copyright.vue";
export default {
  components: {
    ToTop,
    NavFooter,
    MenuFooter,
    Copyright
  },
  props: {}
};
</script>
<style lang="scss" scoped>
// @import "../../scss/reset";
// @import "../../scss/common";
</style>
