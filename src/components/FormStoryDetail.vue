<template>
  <main class="form-book">
    {{ getData }}
    {{ properties }}
    <form name="formStoryDetail">
      <input type="hidden" name="id" value="00003" />
      <input type="hidden" name="id_story" value="lc00003" />

      <TitleMain :title_main="properties.title_main" @formUpdate="formUpdate" />
      <AutherName :auther_name="properties.auther_name" @formUpdate="formUpdate" />
      <IsComplete :is_complete="properties.is_complete" @formUpdate="formUpdate" />
      <Genre :genre="properties.genre" @formUpdate="formUpdate" />
      <CatchCopy :catch_copy="properties.catch_copy" @formUpdate="formUpdate" />
      <Synopsis :synopsis="properties.synopsis" @formUpdate="formUpdate" />
      <Keywords :keyword="properties.keywords" @formUpdate="formUpdate" />

      <ExtremeDepiction
        :extreme_depiction="properties.extreme_depiction"
        @formUpdate_array="formUpdate_array"
      />

      <ColorType :color_type="properties.color_type" @formUpdate="formUpdate" />
      <ReceptionDate :reception_date="properties.reception_date" @formUpdate="formUpdate" />
      <LastModifyDate :last_modify_date="properties.last_modify_date" @formUpdate="formUpdate" />
      <Advertisement
        :accept_advertisement="properties.accept_advertisement"
        @formUpdate="formUpdate"
      />
      <AcceptRating :accept_rating="properties.accept_rating" @formUpdate="formUpdate" />
      <AcceptReviews :accept_reviews="properties.accept_reviews" @formUpdate="formUpdate" />
      <AcceptImpressions
        :accept_impressions="properties.accept_impressions"
        @formUpdate="formUpdate"
      />
      <PublishEvaluation
        :publish_evaluation="properties.publish_evaluation"
        @formUpdate="formUpdate"
      />
      <AcceptTypoReports
        :accept_typo_report="properties.accept_typo_report"
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

import { story } from "../queries/query/story.js";
import { addStory } from "../queries/mutation/addStory";
import request from "../lib/request";

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
    AcceptTypoReports
  },
  data() {
    return {
      values: this.properties
    };
  },
  props: {
    properties: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    story() {
      return this.$store.state.story;
    },
    getData() {
      return request(story, 0);
    }
  },

  methods: {
    formUpdate(e) {
      e.preventDefault();
      const name = e.target.name;
      const val = e.target.value;
      this.$set(this.properties, name, val);
    },
    formUpdate_array(name, val) {
      this.$set(this.properties, name, val);
    },
    submitFormData(e) {
      e.preventDefault();
      const storyForm = document.formStoryDetail;
      const formData = new FormData(storyForm);
      let tempHash = {};
      for (let item of formData) {
        tempHash[item[0]] = item[1];
      }
      request(addStory(tempHash), 1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/_btnPost.scss";
</style>
