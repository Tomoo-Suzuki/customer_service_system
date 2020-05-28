<template>
  <main>
    <H2 text="書斎" />
    <BtnLink link="/form-story/new" btnStyle="btn_link" text="新規book作成" />
    <BtnLink link="/form-post" btnStyle="btn_link" text="storyの追加" />

    <BtnLink link="/analysis" btnStyle="btn_link4" text="アクセス解析" />
    <BtnLink link="/history" btnStyle="btn_link4" text="閲覧履歴" />
    <BtnLink link="/bookmark" btnStyle="btn_link4" text="ブックマーク" />
    <BtnLink link="/" btnStyle="btn_link4" text="評価・コメント" />

    <section class="section_writingroom">
      <H3 text="小説一覧" />
      <dl v-for="(item, index) in values" :key="index">
        <dt>{{ index + 1 }}</dt>
        <dd>{{ item.id_story }}</dd>
        <dd>
          <router-link
            :to="{
              name: 'view-story-information',
              params: { id_story: item.id_story }
            }"
            tag="div"
            class="link_story"
            active-class="link_active"
            exact
            >{{ item.title_main }}</router-link
          >
        </dd>
        <dd>{{ isComplete(item.is_complete) }}</dd>
        <dd>
          <router-link
            :to="{
              name: 'post-view',
              params: {
                id_story: item.id_story,
                id_post: 'new'
              }
            }"
            tag="div"
            class="btn_edit"
            active-class="link_active"
            exact
            >story追加</router-link
          >
        </dd>
        <dd>
          <router-link
            :to="`/form-story/` + item.id_story"
            tag="div"
            class="btn_edit"
            active-class="link_active"
            exact
            >book編集</router-link
          >
        </dd>
      </dl>
    </section>
  </main>
</template>

<script lang="ts">
import H2 from "@/components/atoms/H2";
import H3 from "@/components/atoms/H3";
import BtnLink from "@/components/atoms/BtnLink";

import { selectStoryUser } from "@/queries/query/selectStoryUser";

export default {
  components: {
    H2,
    H3,
    BtnLink
  },
  mounted() {
    // const thisForm = document.forms.formStory;
    // const id_story = thisForm.id_user.value;
    const idUser = "00001";
    if (!idUser) return;
    const promise = selectStoryUser(idUser, this.toMutationDispatch);
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
// @import "../scss/_writing_room.scss";

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
        width: calc(100% - 42rem);
        text-align: left;
      }
      &:nth-of-type(3) {
        width: 10rem;
        text-align: left;
      }
      &:nth-of-type(4) {
        width: 10rem;
        text-align: left;
      }
      &:nth-of-type(5) {
        width: 10rem;
        text-align: left;
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
          width: 6rem;
          text-align: left;
        }
        &:nth-of-type(2) {
          width: calc(100% - 8.5rem);
          text-align: left;

          > div {
            line-height: 1.4;
            text-decoration: none;
          }
        }
        &:nth-of-type(3) {
          width: 10rem;
          text-align: center;
        }
        &:nth-of-type(4) {
          width: 10rem;
          text-align: left;
        }
        &:nth-of-type(5) {
          width: 10rem;
          text-align: left;
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
