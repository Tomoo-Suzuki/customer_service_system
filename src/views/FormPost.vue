<template>
  <main class="form-book">
    {{ this.$route.params }}
    <H2 text="storyの投稿" />
    <div v-if="status === 0 || status === 1">
      <form name="formPost">
        <input type="hidden" name="id_story" :value="idStory" />
        <input type="hidden" name="id_post" :value="idPost" />
        <TitleChapter
          :titleChapter="values.title_chapter"
          :status="status"
          @formUpdate="formUpdate"
        />
        <HasChapter
          :hasChapter="values.has_chapter"
          :status="status"
          @formUpdate="formUpdate"
        />
        <Title
          :title="values.title"
          :status="status"
          @formUpdate="formUpdate"
        />
        <!--TODO:改行(マークではなく)をgraphQlは扱えない。対応を考える。-->
        <Story
          :story="values.story"
          :status="status"
          @formUpdate="formUpdate"
        />
        <!-- <File :file="properties.file" @formUpdate="formUpdate" /> -->
        <LastModifyDate
          :dateLastModify="values.date_last_modify"
          @formUpdate="formUpdate"
        />
        <div class="btnWrap">
          <div v-if="status === 0" class="btn">
            <BtnLinkParam
              btnStyle="btn_link9"
              text="小説情報に戻る"
              :linkObject="linkObject"
            />
            <span @click="progressStatus(1), setFormDataToState">確認する</span>
          </div>
          <div v-if="status === 1" class="btn">
            <span @click="progressStatus(0)">戻る</span>
            <span @click="submitFormData(), progressStatus(2)">送信する</span>
          </div>
        </div>
      </form>
    </div>
    <div v-if="status === 2">
      <div>ご登録ありがとうございました。</div>
    </div>
  </main>
</template>

<script lang="ts">
import TitleChapter from "../components/atoms/formParts/TitleChapter";
import HasChapter from "../components/atoms/formParts/HasChapter";
import Title from "../components/atoms/formParts/Title";
import LastModifyDate from "../components/atoms/formParts/LastModifyDate";
// import File from "../components/atoms/formParts/File";
import Story from "../components/atoms/formParts/Story";

import H2 from "../components/atoms/H2";

import BtnLinkParam from "../components/atoms/BtnLinkParam";

import formDataToHash from "../lib/formDataToHash";

import { selectPost } from "../queries/query/selectPost";
import { insertPost } from "../queries/mutation/insertPost";
import { updatePost } from "../queries/mutation/updatePost";

export default {
  components: {
    TitleChapter,
    HasChapter,
    Title,
    Story,
    LastModifyDate,
    H2,
    BtnLinkParam
    // File,
  },
  mounted() {
    if (!this.id_post) return;
    const promise = selectPost(this.id_post, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.post || {};
    });
  },
  computed: {},
  data() {
    return {
      idStory: this.$route.params.id_story,
      idPost: this.$route.params.id_post,
      values: this.$store.getters.post || {},
      status: 0,
      linkObject: {
        name: "view-story-information",
        params: {
          idStory: this.$route.params.id_story
        }
      }
    };
  },
  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updatePost", res);
    },
    formUpdate(type, e, name, val) {
      e.preventDefault();
      if (type === 1) {
        this.$set(this.values, name, val);
      } else if (type === 2) {
        const name = e.target.name;
        const val = e.target.value === "true" ? true : false;
        this.$set(this.values, name, val);
      } else {
        const name = e.target.name;
        const val = e.target.value;
        this.$set(this.values, name, val);
      }
      this.$store.dispatch("updatePost", this.values);
    },
    progressStatus(num) {
      this.status = num;
    },
    setFormDataToState() {
      const thisForm = document.forms.formPost;
      const thisFormData = formDataToHash(thisForm);
      this.$store.dispatch("updatePost", thisFormData);
      this.values = this.$store.getters.post;
    },
    idMaker() {
      //TODO:拡張する要リファクタリング
      if (this.id_post === "new" || this.id_post === undefined) {
        const d = new Date();
        const subPostId = d.getUTCMilliseconds();
        const newIdPost = "dt" + this.id_story + subPostId;
        return newIdPost;
      }
    },

    submitFormData() {
      //   const thisFrom = document.forms.formPost;
      if (this.id_post === "new") {
        console.log("pass insertPost");
        const newIdPost = this.idMaker();
        //一次処理
        this.values["id_story"] = this.id_story;
        this.values["id_post"] = newIdPost;
        //insertPost(thisFrom, this.toMutationDispatch);
        insertPost(this.values, this.toMutationDispatch);
      } else {
        console.log("pass updatePost");
        //updatePost(thisFrom, this.toMutationDispatch);
        updatePost(this.values, this.toMutationDispatch);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/_btnPost.scss";
/deep/input,
/deep/textarea {
  border: solid #eeeeee 1px;
}
.form-book {
  width: 75.6rem;
  margin: 7.2rem auto;
  font-size: 1.4rem;
  /deep/ > dl {
    margin-bottom: 2.4rem;
    display: table;
    /deep/ dt,
    /deep/ dd {
      display: table-cell;
      /deep/input {
        display: inline-block;
        border: #eeeeee solid 1px;
        border-radius: 3px;
        width: 12rem;
        padding: 4px;
        height: 2rem;
      }
    }
    /deep/ dt {
      width: 16rem;
      vertical-align: top;
    }
    /deep/ dd {
      width: 59.6rem;
      > div,
      > span,
      > div > span {
        margin-right: 1.6rem;
      }
      > div {
        margin-bottom: 1.6rem;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
}

@media screen and (max-width: 413px) {
}
</style>
