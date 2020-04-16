<template>
  <nav class="nav_siteSwicher">
    <Logo :logoType="'1'" />
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
  > div:nth-of-type(1) {
    margin-right: 1.5rem;
  }
}
</style>
