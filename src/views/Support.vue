<template>
  <main>
    <H2 text="サポート" />
    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
  </main>
</template>

<script lang="ts">
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
