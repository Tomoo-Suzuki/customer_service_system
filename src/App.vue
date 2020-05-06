<template>
  <div class="wrapper">
    <Header />
    <div class="contents">
      <div class="contents-inner">
        <nav class="nav_temp">
          <router-link to="/" tag="div" active-class="link_active" exact>Home</router-link>
          <router-link to="/form-login" tag="div" active-class="link_active" exact>Login</router-link>
          <router-link
            to="/form-registration"
            tag="div"
            active-class="link_active"
            exact
          >registration</router-link>
          <router-link to="/form-post" tag="div" active-class="link_active" exact>Story Upload</router-link>
          <router-link to="/form-story" tag="div" active-class="link_active" exact>Story Detail</router-link>
          <router-link to="/form-account" tag="div" active-class="link_active" exact>Account</router-link>
        </nav>
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      test: "qwer",
      questionaryData: {
        firstName: "横浜",
        lastName: "流星",
        firstNameKana: "ヨコハマ",
        lastNameKana: "リュウセイ",
        company: "ソフトバンク",
        section: "第二リテール部門",
        tel: "09011274464",
        mail: "zoft@gmail.com",
        zip: "117-445",
        prefecture: "愛知県",
        address: "名古屋市栄",
        building: "9-7-5",
        productNumber: "SJJ1275",
        color: "black",
        size: "23.5",
        detail:
          "ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー",
        file: ""
      }
    };
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
    color: blue;
    text-decoration: underline;
  }
}
</style>
