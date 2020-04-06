<template>
  <div class="wrapper">
    <Header />
    <div class="contents">
      <div class="contents-inner">
        <FormPost :properties="questionaryData"></FormPost>
        <FormStoryDetail :properties="questionaryData"></FormStoryDetail>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import FormPost from "./components/FormPost";
import FormStoryDetail from "./components/FormStoryDetail";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    FormPost,
    FormStoryDetail,
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

<style lang="scss">
@import "./scss/reset";
@import "./scss/common";
</style>
