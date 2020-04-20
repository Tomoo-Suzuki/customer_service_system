<template>
  <main class="form-book">
    {{properties}}
    <form name="formStoryDetail">
      <TitleMain :titleMain="properties.titleMain" @formUpdate="formUpdate" />
      <AutherName :autherName="properties.autherName" @formUpdate="formUpdate" />
      <IsComplete :isComplet="properties.isComplete" @formUpdate="formUpdate" />
      <Genre :genre="properties.genre" @formUpdate="formUpdate" />
      <CatchCopy :catchCopy="properties.catchCopy" @formUpdate="formUpdate" />
      <Synopsis :synopsis="properties.synopsis" @formUpdate="formUpdate" />
      <Keywords :keyword="properties.keywords" @formUpdate="formUpdate" />

      <ExtremeDepiction
        :extremeDepictio="properties.extremeDepiction"
        @formUpdate_array="formUpdate_array"
      />

      <ColorType :colorType="properties.colorType" @formUpdate="formUpdate" />
      <ReceptionDate :receptionDate="properties.receptionDate" @formUpdate="formUpdate" />
      <LastModifyDate :lastModifyDate="properties.lastModifyDate" @formUpdate="formUpdate" />
      <Advertisement :advertisement="properties.advertisement" @formUpdate="formUpdate" />
      <AcceptRating :acceptRating="properties.acceptRating" @formUpdate="formUpdate" />
      <AcceptReviews :acceptReviews="properties.acceptReviews" @formUpdate="formUpdate" />
      <AcceptImpressions
        :acceptImpressions="properties.acceptImpressions"
        @formUpdate="formUpdate"
      />
      <AcceptReviews :acceptReviews="properties.acceptReviews" @formUpdate="formUpdate" />
      <PublishEvaluation
        :publishEvaluation="properties.publishEvaluation"
        @formUpdate="formUpdate"
      />
      <AcceptTypoReports
        :acceptTypoReports="properties.acceptTypoReports"
        @formUpdate="formUpdate"
      />
      <button @click="postData">送信する</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
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
    postData(e) {
      e.preventDefault();
      const thisForm = document.formStoryDetail;
      const fd = new FormData(thisForm);
      const url =
        "https://firestore.googleapis.com/v1/projects/customer-service-7805c/databases/(default)/documents/properties";
      axios
        .post(url, fd)
        .then(function(res) {
          console.log(res);
        })
        .catch();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
</style>
