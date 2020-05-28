<template>
  <nav class="nav_header">
    <ul>
      <li v-for="item in navHeaderLists" :key="item.index">
        <router-link :to="item.link" tag="a" active-class="active" exact>
          <span>
            <span></span>
          </span>
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
export default {
  data() {
    return {
      navHeaderLists: [
        { text: "ランキング", link: "/ranking", index: 0 },
        { text: "公式連載", link: "/public-series", index: 1 },
        { text: "書籍化作品", link: "/book-publication", index: 2 },
        { text: "コンテスト・企画", link: "/contest", index: 3 },
        { text: "小説を探す", link: "/search", index: 4 },
        { text: "異世界", link: "/genre/diffrent-world", index: 5 },
        { text: "超能力", link: "/genre/Supernatural power", index: 6 },
        { text: "女主人公", link: "/genre/female-hero", index: 7 },
        { text: "BOOKMAオンリー", link: "/genre/bookma-only", index: 8 },
        { text: "戦記", link: "/genre/military-history", index: 9 },
        { text: "ファンタジー", link: "genre/fantasy", index: 10 }
      ]
    };
  },

  props: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../scss/_color.scss";

.nav_header {
  height: 3.2rem;
  border-bottom: dashed 1px $upload_blue_light;
  border-left: dotted 1px #efefef;
  border-right: solid 1px #efefef;

  > ul {
    height: 3.2rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    overflow-x: scroll;

    > li {
      margin: 0 0.5rem;
      padding: 0.3rem 1rem;
      white-space: nowrap;
      color: #ffffff;
      background: $upload_blue_dark;
      border-radius: 2px;
      height: 1.6rem;

      > a {
        color: #ffffff;
        font-weight: normal;
        text-decoration: none;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .nav_header {
    height: 3.2rem;
    border-bottom: dashed 1px $upload_blue_light;

    > ul {
      height: 3.2rem;
      width: 95%;
      margin: auto;

      > li {
        font-size: 1.3rem;
        font-weight: bold;
        margin: 0 0.5rem;
        padding: 0.3rem 1rem;
        color: #ffffff;
        border-radius: 2px;
        height: 1.3rem;
      }
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
