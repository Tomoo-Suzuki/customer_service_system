<template>
  <div class="menuHeader">
    <ul>
      <li v-for="item in menuHeaderLists" :key="item.text">
        <router-link :to="item.link" tag="a" active-class="active" exact>
          <span>
            <span></span>
          </span>
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {},
  data() {
    return {
      menuHeaderLists: [
        { text: "ブックマーク", link: "/bookmark" },
        { text: "マイページ", link: "/mypage" },
        { text: "閲覧履歴", link: "/history" },
        { text: "アクセス解析", link: "/analysis" },
        { text: "ログイン", link: "/form-login" },
        { text: "新規ご登録", link: "/form-registration" },
        { text: "初めての方へ", link: "/support" }
      ]
    };
  },
  methods: {}
});
</script>
<style lang="scss" scoped>
@import "../../scss/index.scss";
.menuHeader {
  font-size: 1.2rem;
  margin-bottom: 3.1rem;

  > ul {
    list-style-type: none;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: flex-end;

    > li {
      display: inline-block;
      width: 8rem;
      margin-right: 1.5rem;
      overflow: hidden;

      &:last-child {
        margin-right: 0;
      }

      > a {
        color: #000000;
        font-weight: normal;
        text-decoration: none;
        display: inline-block;
        width: 80%;
        height: 100%;
        text-align: left;
        position: relative;
        padding-left: 1.8rem;

        > span {
          position: absolute;
          top: 0;
          left: 0;
          background: $upload_blue_dark;
          border-radius: 50%;
          width: 1.3rem;
          height: 1.3rem;

          > span {
            position: absolute;
            top: 0.4rem;
            left: 0.4rem;
            background: #ffffff;
            border-radius: 50%;
            width: 0.5rem;
            height: 0.5rem;
          }
        }

        &.active {
          text-decoration: underline;

          > span {
            background: #ffffff;
            border: solid 2px $upload_blue_dark;
            width: 0.9rem;
            height: 0.9rem;

            > span {
              background: $upload_blue_dark;
              top: 0.2rem;
              left: 0.2rem;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 900px) {
  .menuHeader {
    width: 93%;
    font-size: 1rem;
    line-height: 1.5;
    margin: 2rem auto;

    > ul {
      //   list-style-type: none;
      //   display: inline-flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      > li {
        display: inline-block;
        width: 8rem;
        margin-right: 1.8rem;
        margin-bottom: 1rem;
        overflow: hidden;

        &:last-child {
          margin-right: 0;
        }

        > a {
          color: #000000;
          font-weight: normal;
          text-decoration: none;
          display: inline-block;
          width: 80%;
          height: 100%;
          text-align: left;
          position: relative;
          padding-left: 1.8rem;

          > span {
            position: absolute;
            top: 0;
            left: 0;
            background: $upload_blue_dark;
            border-radius: 50%;
            width: 1.3rem;
            height: 1.3rem;

            > span {
              position: absolute;
              top: 0.4rem;
              left: 0.4rem;
              background: #ffffff;
              border-radius: 50%;
              width: 0.5rem;
              height: 0.5rem;
            }
          }

          &.active {
            text-decoration: underline;

            > span {
              background: #ffffff;
              border: solid 2px $upload_blue_dark;
              width: 0.9rem;
              height: 0.9rem;

              > span {
                background: $upload_blue_dark;
                top: 0.2rem;
                left: 0.2rem;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
