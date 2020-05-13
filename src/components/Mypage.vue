<template>
  <main>
    <H2 text="マイページ" />
    <BtnLink link="/form-account" text="アカウントの更新" />

    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
    <div></div>
  </main>
</template>

<script>
import H2 from "./atoms/H2.vue";
import BtnLink from "./atoms/BtnLink.vue";

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
