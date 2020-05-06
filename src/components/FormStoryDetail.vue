<template>
  <main class="form-book">
    <form name="formStory">
      <input type="hidden" name="id" value="00003" />
      <input type="hidden" name="id_story" value="sf00005" />

      <TitleMain :title_main="values.title_main" @formUpdate="formUpdate" />
      <AutherName :auther_name="values.auther_name" @formUpdate="formUpdate" />
      <IsComplete :is_complete="values.is_complete" @formUpdate="formUpdate" />
      <Genre :genre="values.genre" @formUpdate="formUpdate" />
      <CatchCopy :catch_copy="values.catch_copy" @formUpdate="formUpdate" />
      <Synopsis :synopsis="values.synopsis" @formUpdate="formUpdate" />
      <Keywords :keywords="values.keywords" @formUpdate="formUpdate" />

      <ExtremeDepiction
        :extreme_depiction="values.extreme_depiction"
        @formUpdate="formUpdate"
      />

      <ColorType :color_type="values.color_type" @formUpdate="formUpdate" />
      <ReceptionDate
        :reception_date="values.reception_date"
        @formUpdate="formUpdate"
      />
      <LastModifyDate
        :last_modify_date="values.last_modify_date"
        @formUpdate="formUpdate"
      />
      <Advertisement
        :accept_advertisement="values.accept_advertisement"
        @formUpdate="formUpdate"
      />
      <AcceptRating
        :accept_rating="values.accept_rating"
        @formUpdate="formUpdate"
      />
      <AcceptReviews
        :accept_reviews="values.accept_reviews"
        @formUpdate="formUpdate"
      />
      <AcceptImpressions
        :accept_impressions="values.accept_impressions"
        @formUpdate="formUpdate"
      />
      <PublishEvaluation
        :publish_evaluation="values.publish_evaluation"
        @formUpdate="formUpdate"
      />
      <AcceptTypoReports
        :accept_typo_report="values.accept_typo_report"
        @formUpdate="formUpdate"
      />
      <div class="btnWrap">
        <div class="btn">
          <button @click="submitFormData">送信する</button>
        </div>
      </div>
    </form>
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
  },
  mounted() {
    const thisForm = document.forms.formStory;
    const id_story = thisForm.id_story.value;
    if (!id_story) return;
    const promise = selectStory(id_story, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.story || {};
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
      this.$store.dispatch("updateStory", res);
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
      const thisFrom = document.forms.formStory;
      insertStory(thisFrom, this.toMutationDispatch);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/_btnPost.scss";
</style>
