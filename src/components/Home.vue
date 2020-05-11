<template>
  <main>
    <h1>home</h1>
    <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>
    <div>
      <section>
        <H2 text="注目の作品" />
      </section>
      <section>
        <H3 text="ユーザー登録" />
      </section>
      <section>
        <H4 text="{特集}" />
      </section>
      <section>
        <H5 text="{おすすめレビュー}" />
      </section>
      <section>
        <H2 text="新着小説" />
      </section>
      <section>
        <H3 text="コンテスト" />
      </section>
      <section>
        <H4 text="{ランキング}" />
      </section>
      <section>
        <H5 text="{ランキング}" />
      </section>
    </div>
    <div>
      <section>
        <H2 text="累計ランキング" />
      </section>
      <section>
        <H3 text="自主企画の新着 " />
      </section>
      <section>
        <H3 text="二次創作の新着 " />
      </section>
    </div>
    <button @click="getData">GQL</button>
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
    // getData() {
    //   const query =
    //     'query{user(id:"00001"){password,user_type,magazine,agree_to_terms,date_reception}}';
    //   const url = "http://localhost:7777/graphql";
    //   axios
    //     .post(url, { query: query })
    //     .then(function(res) {
    //       console.log(res);
    //     })
    //     .catch(function(e) {
    //       console.log("反映テスト８");
    //       console.log(e);
    //     });
    // }
  }
};
</script>
