<template>
  <main>
    <h1>home</h1>
    <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>
  </main>
</template>

<script>
export default {
  methods: {
    toEachPage(path) {
      this.$router.push(path);
    },
  },
};
</script>
