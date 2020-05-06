<template>
  <footer class="footerBook">
    <ToTop />
    <div class="footerBook_inner">
      <SiteSwitcherFooter />
      <MenuFooter />
      <Copyright />
    </div>
  </footer>
</template>
<script>
import ToTop from "../atoms/ToTop.vue";
import SiteSwitcherFooter from "../molecules/SiteSwitcherFooter.vue";
import MenuFooter from "../atoms/MenuFooter.vue";
import Copyright from "../atoms/Copyright.vue";
export default {
  components: {
    ToTop,
    SiteSwitcherFooter,
    MenuFooter,
    Copyright
  },
  props: {}
};
</script>
<style lang="scss" scoped>
@import "../../scss/_color.scss";

.footerBook {
  width: 100%;
  font-size: 1.4rem;
  color: #ffffff;
  background: $upload_blue_dark;
  padding-bottom: 3rem;
  .footerBook_inner {
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }
}
</style>
