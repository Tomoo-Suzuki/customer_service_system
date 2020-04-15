<template>
  <header>
    <Logo />
    <SearchBox />
    <NavMain />
    <MenuHeader />
    <NavHeader />
  </header>
</template>
<script>
import Logo from "../atoms/Logo.vue";
import SearchBox from "../atoms/SearchBox.vue";
import NavMain from "../atoms/NavMain.vue";
import MenuHeader from "../atoms/MenuHeader.vue";
import NavHeader from "../atoms/NavHeader.vue";

export default {
  components: {
    Logo,
    SearchBox,
    NavMain,
    MenuHeader,
    NavHeader
  },
  props: {}
};
</script>
<style lang="scss" scoped></style>
