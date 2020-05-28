<template>
  <div class="wrapper">
    <Header />
    <div class="contents">
      <div class="contents-inner">
        <nav class="nav_temp">
          <!-- <router-link to="/form-login" tag="div" active-class="link_active" exact>Login</router-link>
          <router-link
            to="/form-registration"
            tag="div"
            active-class="link_active"
            exact
          >registration</router-link>
          <router-link to="/form-post" tag="div" active-class="link_active" exact>Story Upload</router-link>
          <router-link to="/form-story" tag="div" active-class="link_active" exact>Story Detail</router-link>
          <router-link to="/form-account" tag="div" active-class="link_active" exact>Account</router-link>-->
        </nav>
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/index";
// @import "./scss/common";
.nav_temp {
  > div {
    color: cadetblue;
    font-weight: bold;
    cursor: pointer;
  }
  .link_active {
    text-decoration: underline;
  }
}
</style>
