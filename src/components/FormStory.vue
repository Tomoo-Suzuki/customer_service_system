<template>
  <main class="form-book">
    <H2 text="小説の設定" />
    <div v-if="status===0||status===1">
      <form name="formStory">
        <input type="hidden" name="id_user" :value="id_user" />
        <input type="hidden" name="id_story" :value="id_story" />

        <TitleMain :title_main="values.title_main" :status="status" @formUpdate="formUpdate" />
        <AutherName :auther_name="values.auther_name" :status="status" @formUpdate="formUpdate" />
        <IsComplete :is_complete="values.is_complete" :status="status" @formUpdate="formUpdate" />
        <Genre :genre="Number(values.genre)" :status="status" @formUpdate="formUpdate" />
        <CatchCopy :catch_copy="values.catch_copy" :status="status" @formUpdate="formUpdate" />
        <Synopsis :synopsis="values.synopsis" :status="status" @formUpdate="formUpdate" />
        <Keywords :keywords="values.keywords" :status="status" @formUpdate="formUpdate" />

        <ExtremeDepiction
          :extreme_depiction="parse_props(values.extreme_depiction)"
          :status="status"
          @formUpdate="formUpdate"
        />

        <ColorType
          :color_type="Number(values.color_type)"
          :status="status"
          @formUpdate="formUpdate"
        />
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
            <BtnLinkParam btn_style="btn_link9" text="書斎へ戻る" :linkObject="linkObject" />
            <span @click="progressStatus(1),setFormDataToState">確認する</span>
          </div>
          <div v-if="status===1" class="btn">
            <span @click="progressStatus(0)">戻る</span>
            <span @click="submitFormData(), progressStatus(2)">送信する</span>
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

import BtnLinkParam from "./atoms/BtnLinkParam.vue";

import H2 from "./atoms/H2.vue";

import formDataToHash from "../lib/formDataToHash";

import { selectStory } from "../queries/query/selectStory.js";
import { insertStory } from "../queries/mutation/insertStory";
import { updateStory } from "../queries/mutation/updateStory";

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
    H2,
    BtnLinkParam
  },
  mounted() {
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
      id_user: "00001",
      id_story: this.$route.params.id_story,
      linkObject: {
        name: "writing-room-view",
        params: {
          id_story: this.id_story,
          id_post: "new"
        }
      }
    };
  },
  computed: {
    parse_props() {
      return item => {
        if (!item) return;
        return item.split(",");
      };
    }
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
        let val = e.target.value === "true" ? true : false;
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
    idMaker() {
      if (this.id_story === "new" || this.id_story === undefined) {
        const d = new Date();
        const new_id_story = this.id_user + d.toString();
        return new_id_story;
      }
    },

    submitFormData() {
      //   e.preventDefault();
      //   const thisFrom = document.forms.formStory;
      console.log(this.id_story);
      if (this.id_story === "new") {
        console.log("pass insert");
        const new_id_story = this.idMaker();
        this.values["id_story"] = new_id_story;
        //insertStory(thisFrom, this.toMutationDispatch);
        insertStory(this.values, this.toMutationDispatch);
      } else {
        console.log("pass update");
        //updateStory(thisFrom, this.toMutationDispatch);
        updateStory(this.values, this.toMutationDispatch);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/_btnPost.scss";
</style>
