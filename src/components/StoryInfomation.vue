<template>
  <main>
    <H2 text="小説情報" />
    <BtnLinkParam btn_style="btn_link" text="storyの追加" :linkObject="linkObjectNew" />

    <BtnLink link="/analysis" btn_style="btn_link4" text="アクセス解析" />
    <BtnLink link="/history" btn_style="btn_link4" text="閲覧履歴" />
    <BtnLink link="/bookmark" btn_style="btn_link4" text="ブックマーク" />
    <BtnLink link="/" btn_style="btn_link4" text="評価・コメント" />

    <section class="section_writingroom">
      <H3 text="投稿一覧" />
      <dl v-for="(item,index) in values" :key="index">
        <dt>{{index+1}}</dt>
        <dd>{{item.id_post }}</dd>
        <dd>{{item.title }}</dd>
        <dd>{{isComplete(item.is_complete)}}</dd>
        <dd>
          <router-link
            :to="{
                name:'post-view',
                params:{
                    id_story:item.id_story,
                    id_post:item.id_post
                }
            }"
            tag="div"
            class="btn_edit"
            active-class="link_active"
            exact
          >編集</router-link>
        </dd>
      </dl>
    </section>
    <div class="btnWrap">
      <BtnLinkParam btn_style="btn_link9" text="書斎へ戻る" :linkObject="linkObject" />
    </div>
  </main>
</template>

<script>
import H2 from "./atoms/H2.vue";
import H3 from "./atoms/H3.vue";
import BtnLink from "./atoms/BtnLink.vue";
import BtnLinkParam from "./atoms/BtnLinkParam.vue";

import { selectPostStory } from "../queries/query/selectPostStory.js";

export default {
  components: {
    H2,
    H3,
    BtnLink,
    BtnLinkParam
  },
  mounted() {
    console.log("mounted");
    if (!this.id_story) return;
    console.log(this.id_story);
    const promise = selectPostStory(this.id_story, this.toMutationDispatch);
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
      id_story: this.$route.params.id_story,
      values: this.$store.getters.post || {},
      status: 0,
      //   btn_style: "",
      linkObject: {
        name: "writing-room-view",
        params: {
          id_story: this.$route.params.id_story,
          id_post: this.id_post
        }
      },
      linkObjectNew: {
        name: "post-view",
        params: {
          id_story: this.$route.params.id_story,
          id_post: "new"
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
};
</script>
<style lang="scss" scoped>
@import "../scss/_color.scss";

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
</style>