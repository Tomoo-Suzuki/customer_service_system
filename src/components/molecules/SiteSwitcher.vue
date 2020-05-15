<template>
  <nav class="nav_siteSwicher">
    <Logo :logoType="'0'" />
    <Logo :logoType="'2'" />
  </nav>
</template>
<script>
import Logo from "../atoms/Logo.vue";

export default {
  components: {
    Logo
  },
  props: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.nav_siteSwicher {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  > .logo {
    width: 11rem;
    margin-right: 0;
  }
  > .logo:nth-of-type(1) {
    margin-right: 1.5rem;
  }
}
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .nav_siteSwicher {
    position: absolute;
    top: 0;
    right: 0;
    // display: flex;
    // flex-wrap: nowrap;
    // justify-content: space-between;
    > .logo {
      width: 6rem;
    }
    > .logo:nth-of-type(1) {
      margin-right: 1rem;
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
