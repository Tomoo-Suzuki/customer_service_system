<template>
  <main>
    <h1>home</h1>
    <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>
    <div>
      <section>
        <h2>注目の作品</h2>
      </section>
      <section>
        <h3>ユーザー登録</h3>
      </section>
      <section>
        <h4>特集</h4>
      </section>
      <section>
        <h5>おすすめレビュー</h5>
      </section>
      <section>
        <h2>新着小説</h2>
      </section>
      <section>
        <h3>コンテスト</h3>
      </section>
      <section>
        <h4>ランキング</h4>
      </section>
      <section>
        <h5>ランキング</h5>
      </section>
    </div>
    <div>
      <section>
        <h2>累計ランキング</h2>
      </section>
      <section>
        <h3>自主企画の新着</h3>
      </section>
      <section>
        <h3>二次創作の新着</h3>
      </section>
    </div>
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
