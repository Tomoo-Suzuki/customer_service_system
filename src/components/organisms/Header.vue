<template>
  <header class="headerBook">
    <div class="headerBook_inner">
      <div class="headerBook_inner_upper">
        <LogoHeader :logoType="'1'" />
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
<script lang="ts">
import LogoHeader from "@/components/molecules/LogoHeader.vue";
import SearchBox from "@/components/atoms/SearchBox.vue";
import SiteSwitcher from "@/components/molecules/SiteSwitcher.vue";
import MenuHeader from "@/components/atoms/MenuHeader.vue";
import NavHeader from "@/components/atoms/NavHeader.vue";
import BtnPriority from "@/components/atoms/BtnPriority.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    LogoHeader,
    SearchBox,
    SiteSwitcher,
    MenuHeader,
    NavHeader,
    BtnPriority
  },
  props: {}
});
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
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .headerBook {
    width: 100%;
    font-size: 1.6rem;
    margin-top: 0;

    .headerBook_inner {
      padding: 0;
      width: 100%;
      max-width: 1280px;
      margin: auto;

      .headerBook_inner_upper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 2rem;

        /deep/ > .logo {
          //width: 15rem;

          > .imgWrap {
            width: 10rem;
          }
        }
      }
      .headerBook_inner_lower {
        position: relative;
      }
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
