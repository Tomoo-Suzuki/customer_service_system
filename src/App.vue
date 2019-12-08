<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <FormContents :properties="questionaryData" :test="test"></FormContents>
  </div>
</template>

<script>
import FormContents from "./components/FormContents";

export default {
  components: {
    FormContents
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

<style>
</style>
