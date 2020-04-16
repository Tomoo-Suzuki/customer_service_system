<template>
  <div class="menuHeader">
    <ul>
      <li>ご注文履歴・ご返品</li>
      <li>ポイント</li>
      <li>カート</li>
      <li>欲しいものリスト</li>
      <li>マイページ</li>
      <li>ヘルプ</li>
      <li>アカウントサービス</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.menuHeader {
  width: 80%;
  max-width: 50rem;
  font-size: 1.2rem;
  > ul {
    list-style-type: none;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    > li {
      display: inline-block;
      width: 70px;
      margin-left: 0.5rem;
    }
  }
}
</style>
