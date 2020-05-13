<template>
  <main>
    <H2 text="ブックマーク" />
    <H3 text="あなたのブックマーク" />
    <H3 text="読者のブックマーク" />
    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
  </main>
</template>

<script>
import H2 from "./atoms/H2.vue";
import H3 from "./atoms/H3.vue";

export default {
  components: {
    H2,
    H3
  },
  methods: {
    toEachPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
