<template>
  <nav class="menuFooter">
    <ul>
      <li>
        <a href>ご利用規約</a>
      </li>
      <li>
        <a href>個人情報保護方針</a>
      </li>
      <li>
        <a href>特定商取引法に基づく表記</a>
      </li>
      <li>
        <a href>企業情報（採用）</a>
      </li>
      <li>
        <a href>ヘルプ・お問い合わせ</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.menuFooter {
  margin: 5rem 0;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    > li {
      margin: 0 5rem 0 0;
      > a {
        color: #ffffff;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
