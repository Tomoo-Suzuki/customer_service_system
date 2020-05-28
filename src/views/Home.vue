<template>
  <main>
    <h1>home</h1>
    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
    <div>
      <section>
        <H2 text="注目の作品" />
      </section>
      <section>
        <H3 text="ユーザー登録" />
      </section>
      <section>
        <H4 text="特集" />
      </section>
      <section>
        <H5 text="おすすめレビュー" />
      </section>
      <section>
        <H2 text="新着小説" />
      </section>
      <section>
        <H3 text="コンテスト" />
      </section>
      <section>
        <H4 text="ランキング" />
      </section>
      <section>
        <H5 text="ランキング" />
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
  </main>
</template>

<script lang="ts">
import H2 from "@/components/atoms/H2";
import H3 from "@/components/atoms/H3";

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
