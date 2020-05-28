<template>
  <main>
    <H2 text="マイページ" />
    <BtnLink
      link="/form-account"
      btnStyle="btn_link4"
      text="アカウントの更新"
    />

    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
    <div></div>
  </main>
</template>

<script>
import H2 from "../components/atoms/H2";
import BtnLink from "../components/atoms/BtnLink";

export default {
  components: {
    H2,
    BtnLink
  },
  methods: {
    toEachPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
