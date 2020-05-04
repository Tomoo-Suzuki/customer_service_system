<template>
  <main class="form-book">
    <!-- {{properties}} -->
    <form name="formPost">
      <input type="hidden" name="id_story" value="sf000001" />
      <input type="hidden" name="id_post" value="sf000001001" />
      {{ values.title_chapter }}
      <TitleChapter
        :title_chapter="values.title_chapter"
        @formUpdate="formUpdate"
      />
      <HasChapter :has_chapter="values.has_chapter" @formUpdate="formUpdate" />
      <Title :title="values.title" @formUpdate="formUpdate" />
      <Story :story="values.story" @formUpdate="formUpdate" />
      <!-- <File :file="properties.file" @formUpdate="formUpdate" /> -->
      <LastModifyDate
        :date_last_modify="values.date_last_modify"
        @formUpdate="formUpdate"
      />
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
import LastModifyDate from "./atoms/formParts/LastModifyDate.vue";
// import File from "./atoms/formParts/File.vue";
import Story from "./atoms/formParts/Story.vue";

import { selectPost } from "../queries/query/selectPost.js";
import { insertPost } from "../queries/mutation/insertPost";

export default {
  components: {
    TitleChapter,
    HasChapter,
    Title,
    Story,
    // File,
    LastModifyDate,
  },
  mounted() {
    const thisForm = document.forms.formPost;
    const id_post = thisForm.id_post.value;
    if (!id_post) return;
    const promise = selectPost(id_post, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.post || {};
    });
  },
  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      values: this.properties,
    };
  },
  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updatePost", res);
    },
    formUpdate(type, e, name, val) {
      e.preventDefault();
      if (type === 1) {
        this.$set(this.properties, name, val);
      } else {
        const name = e.target.name;
        const val = e.target.value;
        this.$set(this.properties, name, val);
      }
    },
    submitFormData(e) {
      e.preventDefault();
      const thisFrom = document.forms.formPost;
      insertPost(thisFrom, this.toMutationDispatch);
    },
  },
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
