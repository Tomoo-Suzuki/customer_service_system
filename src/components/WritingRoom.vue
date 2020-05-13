<template>
  <main>
    <H2 text="書斎(小説一覧)" />
    <!-- <div>小説一覧</div>
    <div>アクセス解析</div>
    <div>閲覧履歴</div>
    <div>ブックマーク</div>
    <div>いいね・コメント</div>
    <div>評価</div>-->
    <BtnLink link="/form-story" text="新規book作成" />
    <BtnLink link="/form-post" text="storyの追加" />
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
