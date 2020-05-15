<template>
  <main class="form-book">
    {{this.$route.params}}
    <H2 text="storyの投稿" />
    <div v-if="status===0||status===1">
      <form name="formPost">
        <input type="hidden" name="id_story" :value="id_story" />
        <input type="hidden" name="id_post" :value="idPostMaker" />
        <TitleChapter
          :title_chapter="values.title_chapter"
          :status="status"
          @formUpdate="formUpdate"
        />
        <HasChapter :has_chapter="values.has_chapter" :status="status" @formUpdate="formUpdate" />
        <Title :title="values.title" :status="status" @formUpdate="formUpdate" />
        <Story :story="values.story" :status="status" @formUpdate="formUpdate" />
        <!-- <File :file="properties.file" @formUpdate="formUpdate" /> -->
        <LastModifyDate :date_last_modify="values.date_last_modify" @formUpdate="formUpdate" />
        <div class="btnWrap">
          <div v-if="status===0" class="btn">
            <BtnLinkParam btn_style="btn_link9" text="戻る" :linkObject="linkObject" />
            <span @click="progressStatus(1),setFormDataToState">確認する</span>
          </div>
          <div v-if="status===1" class="btn">
            <span @click="progressStatus(0)">戻る</span>
            <span @click="submitFormData, progressStatus(2)">送信する</span>
          </div>
        </div>
      </form>
    </div>
    <div v-if="status===2">
      <div>ご登録ありがとうございました。</div>
    </div>
  </main>
</template>

<script>
import TitleChapter from "./atoms/formParts/TitleChapter.vue";
import HasChapter from "./atoms/formParts/HasChapter.vue";
import Title from "./atoms/formParts/Title.vue";
import LastModifyDate from "./atoms/formParts/LastModifyDate.vue";
// import File from "./atoms/formParts/File.vue";
import Story from "./atoms/formParts/Story.vue";

import H2 from "./atoms/H2.vue";

import BtnLinkParam from "./atoms/BtnLinkParam.vue";

import formDataToHash from "../lib/formDataToHash";

import { selectPost } from "../queries/query/selectPost.js";
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
    console.log(this.id_story);
    console.log(this.id_post);
    if (!this.id_post) return;
    const promise = selectPost(this.id_post, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.post || {};
    });
  },
  computed: {
    idPostMaker() {
      if (this.id_post === "new" || this.id_post === undefined) {
        const d = new Date();
        const new_id_post = this.id_story + d.toString;
        return new_id_post;
      } else {
        return this.id_post;
      }
    }
  },

  data() {
    return {
      id_story: this.$route.params.id_story,
      id_post: this.$route.params.id_post,
      values: this.$store.getters.post || {},
      status: 0,
      linkObject: {
        name: "writing-room-view",
        params: {
          id_story: this.id_story,
          id_post: this.id_post
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
        console.log(name);
        console.log(typeof val);
        this.$set(this.values, name, val);
      } else if (type === 2) {
        const name = e.target.name;
        const val = Boolean(e.target.value);
        this.$set(this.values, name, val);
      } else {
        const name = e.target.name;
        const val = e.target.value;
        this.$set(this.values, name, val);
      }
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
    submitFormData(e) {
      e.preventDefault();
      //   const thisFrom = document.forms.formPost;
      if (this.id_post === "new") {
        console.log("pass insert");
        //insertPost(thisFrom, this.toMutationDispatch);
        insertPost(this.values, this.toMutationDispatch);
      } else {
        console.log("pass update");
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
</style>
