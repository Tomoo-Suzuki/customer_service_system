<template>
  <nav class="nav_header">
    <ul>
      <li>異世界ファンタジー</li>
      <li>現代ファンタジー</li>
      <li>SF</li>
      <li>恋愛</li>
      <li>ラブコメ</li>
      <li>現代ドラマ</li>
      <li>ホラー</li>
      <li>ミステリー</li>
      <li>エッセイ・ノンフィクション</li>
      <li>歴史・時代・伝記</li>
      <li>創作論・評論</li>
      <li>詩・童話・その他</li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.nav_header {
  > ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 98%;
    margin: auto;
    max-width: calc(98% - 40px);
    overflow-x: scroll;
    > li {
      margin: 0 0.5rem;
      padding: 0.3rem 1rem;
      white-space: nowrap;
      color: #ffffff;
      background: #3cb2b4;
      border-radius: 2px;
    }
  }
}
</style>
