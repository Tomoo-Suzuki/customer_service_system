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
<script lang="ts">
import ToTop from "@/components/atoms/ToTop.vue";
import SiteSwitcherFooter from "@/components/molecules/SiteSwitcherFooter.vue";
import MenuFooter from "@/components/atoms/MenuFooter.vue";
import Copyright from "@/components/atoms/Copyright.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    ToTop,
    SiteSwitcherFooter,
    MenuFooter,
    Copyright
  },
  props: {}
});
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
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .footerBook {
    width: 100%;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    .footerBook_inner {
      width: 100%;
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
