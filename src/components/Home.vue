<template>
  <main>
    <h1>home</h1>
    <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>
    <button @click="getData">GQL</button>
  </main>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    toEachPage(path) {
      this.$router.push(path);
    },
    getData() {
      const query =
        'query{user(id:"00001"){password,user_type,magazine,agree_to_terms,date_reception}}';
      const url = "http://localhost:7777/graphql";
      axios
        .post(url, { query: query })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(e) {
          console.log("反映テスト８");
          console.log(e);
        });
    }
  }
};
</script>
