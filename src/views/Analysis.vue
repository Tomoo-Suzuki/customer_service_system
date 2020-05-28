<template>
  <main>
    <H2 text="アクセス解析" />
    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
  </main>
</template>

<script>
import H2 from "../components/atoms/H2";

export default {
  components: {
    H2
  },
  methods: {
    toEachPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
