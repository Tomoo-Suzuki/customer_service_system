<template>
  <main>
    <H2 text="書斎" />
    <!-- <div>小説一覧</div>
    <div>アクセス解析</div>
    <div>閲覧履歴</div>
    <div>ブックマーク</div>
    <div>いいね・コメント</div>
    <div>評価</div>-->
    <BtnLink link="/form-story/new" text="新規book作成" />
    <BtnLink link="/form-post" text="storyの追加" />
    <section class="section_writingroom">
      <H3 text="小説一覧" />
      <dl v-for="(item,index) in values" :key="index">
        <dt>{{index+1}}</dt>
        <dd>{{item.id_story }}</dd>
        <dd>{{item.title_main }}</dd>
        <dd>{{isComplete(item.is_complete)}}</dd>
        <dd>
          <router-link
            :to="`/form-story/`+item.id_story"
            tag="div"
            class="btn_edit"
            active-class="link_active"
            exact
          >編集</router-link>
        </dd>
      </dl>
    </section>
  </main>
</template>

<script>
import H2 from "./atoms/H2.vue";
import H3 from "./atoms/H3.vue";
import BtnLink from "./atoms/BtnLink.vue";

import { selectStoryUser } from "../queries/query/selectStoryUser.js";

export default {
  components: {
    H2,
    H3,
    BtnLink
  },
  mounted() {
    // const thisForm = document.forms.formStory;
    // const id_story = thisForm.id_user.value;
    const id_user = "00001";
    if (!id_user) return;
    const promise = selectStoryUser(id_user, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.story || {};
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
      values: this.$store.getters.story || {},
      status: 0
    };
  },

  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updateStory", res);
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
</style>