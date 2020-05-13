<template>
  <header class="headerBook">
    <div class="headerBook_inner">
      <div class="headerBook_inner_upper">
        <Logo :logoType="'1'" />
        <div>
          <MenuHeader />
          <SearchBox />
        </div>
        <SiteSwitcher />
      </div>
      <div class="headerBook_inner_lower">
        <NavHeader />
        <BtnPriority />
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "../atoms/Logo.vue";
import SearchBox from "../atoms/SearchBox.vue";
import SiteSwitcher from "../molecules/SiteSwitcher.vue";
import MenuHeader from "../atoms/MenuHeader.vue";
import NavHeader from "../atoms/NavHeader.vue";
import BtnPriority from "../atoms/BtnPriority.vue";

export default {
  components: {
    Logo,
    SearchBox,
    SiteSwitcher,
    MenuHeader,
    NavHeader,
    BtnPriority
  },
  props: {}
};
</script>
<style lang="scss" scoped>
.headerBook {
  width: 100%;
  font-size: 1.6rem;
  margin-top: 30px;

  .headerBook_inner {
    padding: 10px;
    width: 100%;
    max-width: 1280px;
    margin: auto;

    .headerBook_inner_upper {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      margin-bottom: 2rem;

      /deep/ > .logo {
        //width: 15rem;

        > .imgWrap {
          width: 15rem;
        }
      }
    }
    .headerBook_inner_lower {
      position: relative;
    }
  }
}
</style>
