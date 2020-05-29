<template>
  <main>
    <H2 text="小説情報" />
    <BtnLinkParam
      btnStyle="btn_link"
      text="storyの追加"
      :linkObject="linkObjectNew"
    />
    <BtnLink link="/analysis" btnStyle="btn_link4" text="アクセス解析" />
    <BtnLink link="/history" btnStyle="btn_link4" text="閲覧履歴" />
    <BtnLink link="/bookmark" btnStyle="btn_link4" text="ブックマーク" />
    <BtnLink link="/" btnStyle="btn_link4" text="評価・コメント" />

    <section class="section_writingroom">
      <H3 text="投稿一覧" />
      <dl v-for="(item, index) in values" :key="index">
        <dt>{{ index + 1 }}</dt>
        <dd>{{ item.id_post }}</dd>
        <dd>{{ item.title }}</dd>
        <dd>
          <router-link
            :to="{
              name: 'post-view',
              params: {
                id_story: item.id_story,
                id_post: item.id_post
              }
            }"
            tag="div"
            class="btn_edit"
            active-class="link_active"
            exact
            >編集</router-link
          >
        </dd>
      </dl>
    </section>
    <div class="btnWrap">
      <BtnLinkParam
        btnStyle="btn_link9"
        text="書斎へ戻る"
        :linkObject="linkObject"
      />
    </div>
  </main>
</template>

<script lang="ts">
import H2 from "@/components/atoms/H2";
import H3 from "@/components/atoms/H3";
import BtnLink from "@/components/atoms/BtnLink";
import BtnLinkParam from "@/components/atoms/BtnLinkParam";

import { selectPostStory } from "@/queries/query/selectPostStory";

import Vue from "vue";
export default Vue.extend({
  components: {
    H2,
    H3,
    BtnLink,
    BtnLinkParam
  },
  mounted() {
    console.log("mounted");
    if (!this.idStory) return;
    console.log(this.idStory);
    const promise = selectPostStory(this.idStory, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.post || {};
    });
  },
  computed: {
    isComplete() {
      return function(bool) {
        if (bool === true) {
          return "完結";
        } else if (bool === false) {
          return "執筆中";
        }
      };
    }
  },
  data() {
    return {
      idStory: this.$route.params.id_story,
      values: this.$store.getters.post || {},
      status: 0,
      //   btn_style: "",
      linkObject: {
        name: "writing-room-view",
        params: {
          idStory: this.$route.params.idStory,
          idPost: this.idPost
        }
      },
      linkObjectNew: {
        name: "post-view",
        params: {
          idStory: this.$route.params.id_story,
          idPost: "new"
        }
      }
    };
  },

  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updatePost", res);
    },
    toEachPage(path) {
      this.$router.push(path);
    }
  }
});
</script>
<style lang="scss" scoped>
@import "../scss/_color.scss";
//@import "../scss/_writing_room.scss";

.section_writingroom {
  margin-top: 4rem;
  > dl {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: $upload_blue_dark 1px dotted;
    > dt {
      width: 2rem;
      text-align: center;
    }
    > dd {
      &:nth-of-type(1) {
        width: 10rem;
        text-align: center;
      }
      &:nth-of-type(2) {
        width: calc(100% - 27rem);
        text-align: left;
      }
      &:nth-of-type(3) {
        width: 10rem;
        text-align: left;
      }
      &:nth-of-type(4) {
        width: 5rem;
        text-align: left;
      }
    }
  }
}
.btn_edit {
  background: $upload_blue_dark;
  text-align: center;
  color: #ffffff;
  padding: 0.3rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
.btnWrap {
  text-align: center;
  > span {
    //TODO:統合
    box-sizing: border-box;
    display: inline-block;
    width: 16rem;
    height: 3rem;
    line-height: 2.2rem;
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .section_writingroom {
    margin-top: 4rem;

    > dl {
      display: block;
      font-size: 1.4rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: $upload_blue_dark 1px dotted;

      > dt,
      > dd {
        display: inline-block;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        vertical-align: top;
      }

      > dt {
        width: 2rem;
        text-align: center;
      }

      > dd {
        &:nth-of-type(1) {
          width: 9rem;
          text-align: left;
        }

        &:nth-of-type(2) {
          width: calc(100% - 19.5rem);
          text-align: left;

          > div {
            line-height: 1.4;
            text-decoration: none;
          }
        }

        &:nth-of-type(3) {
          width: 8rem;
          text-align: right;
        }
      }
    }
  }

  .link_story {
    color: $upload_blue_dark;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .btn_edit {
    box-sizing: border-box;
    background: $upload_blue_dark;
    text-align: center;
    color: #ffffff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    width: 80%;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
