<template>
  <main class="form-book">
    <H2 text="小説の設定" />
    <div v-if="status===0||status===1">
      <form name="formStory">
        <input type="hidden" name="id_user" value="00003" />
        <input type="hidden" name="id_story" value="sf00001" />

        <TitleMain :title_main="values.title_main" :status="status" @formUpdate="formUpdate" />
        <AutherName :auther_name="values.auther_name" :status="status" @formUpdate="formUpdate" />
        <IsComplete :is_complete="values.is_complete" :status="status" @formUpdate="formUpdate" />
        <Genre :genre="values.genre" :status="status" @formUpdate="formUpdate" />
        <CatchCopy :catch_copy="values.catch_copy" :status="status" @formUpdate="formUpdate" />
        <Synopsis :synopsis="values.synopsis" :status="status" @formUpdate="formUpdate" />
        <Keywords :keywords="values.keywords" :status="status" @formUpdate="formUpdate" />

        <ExtremeDepiction
          :extreme_depiction="values.extreme_depiction"
          :status="status"
          @formUpdate="formUpdate"
        />

        <ColorType :color_type="values.color_type" :status="status" @formUpdate="formUpdate" />
        <ReceptionDate
          :reception_date="values.reception_date"
          :status="status"
          @formUpdate="formUpdate"
        />
        <LastModifyDate
          :last_modify_date="values.last_modify_date"
          :status="status"
          @formUpdate="formUpdate"
        />
        <Advertisement
          :accept_advertisement="values.accept_advertisement"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptRating
          :accept_rating="values.accept_rating"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptReviews
          :accept_reviews="values.accept_reviews"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptImpressions
          :accept_impression="values.accept_impression"
          :status="status"
          @formUpdate="formUpdate"
        />
        <PublishEvaluation
          :publish_evaluation="values.publish_evaluation"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptTypoReports
          :accept_typo_reports="values.accept_typo_reports"
          :status="status"
          @formUpdate="formUpdate"
        />
        <div class="btnWrap">
          <div v-if="status===0" class="btn">
            <span @click="progressStatus(1),setFormDataToState">確認する</span>
          </div>
          <div v-if="status===1" class="btn">
            <span @click="progressStatus(0)">戻る</span>
            <button @click="submitFormData, progressStatus(2)">送信する</button>
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
import TitleMain from "./atoms/formParts/TitleMain.vue";
import AutherName from "./atoms/formParts/AutherName.vue";
import IsComplete from "./atoms/formParts/IsComplete.vue";
import Genre from "./atoms/formParts/Genre.vue";
import CatchCopy from "./atoms/formParts/CatchCopy.vue";
import Synopsis from "./atoms/formParts/Synopsis.vue";
import Advertisement from "./atoms/formParts/Advertisement.vue";
import ReceptionDate from "./atoms/formParts/ReceptionDate.vue";
import LastModifyDate from "./atoms/formParts/LastModifyDate.vue";

import ExtremeDepiction from "./atoms/formParts/ExtremeDepiction.vue";
import ColorType from "./atoms/formParts/ColorType.vue";
import Keywords from "./atoms/formParts/Keywords.vue";
import AcceptRating from "./atoms/formParts/AcceptRating.vue";
import AcceptImpressions from "./atoms/formParts/AcceptImpressions.vue";
import AcceptReviews from "./atoms/formParts/AcceptReviews.vue";
import PublishEvaluation from "./atoms/formParts/PublishEvaluation.vue";
import AcceptTypoReports from "./atoms/formParts/AcceptTypoReports.vue";

import H2 from "./atoms/H2.vue";

import formDataToHash from "../lib/formDataToHash";

import { selectStory } from "../queries/query/selectStory.js";
import { insertStory } from "../queries/mutation/insertStory";

import "../scss/_form.scss";

export default {
  components: {
    TitleMain,
    AutherName,
    IsComplete,
    Genre,
    CatchCopy,
    Synopsis,
    Advertisement,
    ReceptionDate,
    LastModifyDate,
    ExtremeDepiction,
    Keywords,
    ColorType,
    AcceptRating,
    AcceptImpressions,
    AcceptReviews,
    PublishEvaluation,
    AcceptTypoReports,
    H2
  },
  mounted() {
    console.log("mouted!!!!!!!!!");
    // const thisForm = document.forms.formStory;
    // const id_story = thisForm.id_story.value;
    const id_story = this.id_story;
    console.log(id_story);
    if (!id_story) return;
    if (id_story === "new") return;
    const promise = selectStory(id_story, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.story || {};
    });
  },
  data() {
    return {
      values: this.$store.getters.story || {},
      status: 0,
      id_story: this.$route.params.id_story
    };
  },
  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updateStory", res);
    },
    formUpdate(type, e, name, val) {
      e.preventDefault();
      if (type === 1) {
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
      this.$store.dispatch("updateStory", thisFormData);
      this.values = this.$store.getters.story;
    },
    submitFormData(e) {
      e.preventDefault();
      const thisFrom = document.forms.formStory;
      insertStory(thisFrom, this.toMutationDispatch);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/_btnPost.scss";
</style>
