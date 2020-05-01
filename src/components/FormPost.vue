<template>
  <main class="form-book">
    {{ getData }}
    <form name="formPost">
      <input type="hidden" name="id_story" value="dr00005" />
      <input type="hidden" name="id_post" value="dr000050003" />
      <TitleChapter :title_chapter="properties.title_chapter" @formUpdate="formUpdate" />
      <HasChapter :has_chapter="properties.has_chapter" @formUpdate="formUpdate" />
      <Title :title="properties.title" @formUpdate="formUpdate" />
      <Story :story="properties.story" @formUpdate="formUpdate" />
      <!-- <File :file="properties.file" @formUpdate="formUpdate" /> -->
      <UploadedDate :uploadedDate="properties.uploadedDate" @formUpdate="formUpdate" />
      <div class="btnWrap">
        <div class="btn">
          <button @click="submitFormData">送信</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import TitleChapter from "./atoms/formParts/TitleChapter.vue";
import HasChapter from "./atoms/formParts/HasChapter.vue";
import Title from "./atoms/formParts/Title.vue";
import Story from "./atoms/formParts/UploadedDate.vue";
// import File from "./atoms/formParts/File.vue";
import UploadedDate from "./atoms/formParts/Story.vue";

import { post } from "../queries/query/post.js";
import { addPost } from "../queries/mutation/addPost";
import request from "../lib/request";

export default {
  components: {
    TitleChapter,
    HasChapter,
    Title,
    Story,
    // File,
    UploadedDate
  },
  data() {
    return {
      values: this.properties
    };
  },
  computed: {
    post() {
      return this.$store.state.user;
    },
    getData() {
      return request(post, 0);
    }
  },

  props: {
    properties: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formUpdate(e) {
      e.preventDefault();
      const name = e.target.name;
      const val = e.target.value;
      this.values[name] = val;
    },
    formUpdate_array(name, val) {
      this.$set(this.properties, name, val);
    },
    submitFormData(e) {
      e.preventDefault();
      const postForm = document.formPost;
      const formData = new FormData(postForm);
      let tempHash = {};
      for (let item of formData) {
        tempHash[item[0]] = item[1];
      }
      request(addPost(tempHash), 1);
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
