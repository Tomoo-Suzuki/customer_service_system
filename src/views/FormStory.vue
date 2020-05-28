<template>
  <main class="form-book">
    <H2 text="小説の設定" />
    <div v-if="status === 0 || status === 1">
      <form name="formStory">
        <input type="hidden" name="id_user" :value="idUser" />
        <input type="hidden" name="id_story" :value="idStory" />

        <TitleMain
          :titleMain="values.title_main"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AutherName
          :autherName="values.auther_name"
          :status="status"
          @formUpdate="formUpdate"
        />
        <IsComplete
          :isComplete="values.is_complete"
          :status="status"
          @formUpdate="formUpdate"
        />
        <Genre
          :genre="Number(values.genre)"
          :status="status"
          @formUpdate="formUpdate"
        />
        <CatchCopy
          :catchCopy="values.catch_copy"
          :status="status"
          @formUpdate="formUpdate"
        />
        <!--TODO 改行対応、コピーがstateに保存されない問題-->
        <Synopsis
          :synopsis="values.synopsis"
          :status="status"
          @formUpdate="formUpdate"
        />
        <Keywords
          :keywords="values.keywords"
          :status="status"
          @formUpdate="formUpdate"
        />

        <ExtremeDepiction
          :extremeDepiction="parseProps(values.extreme_depiction)"
          :status="status"
          @formUpdate="formUpdate"
        />

        <ColorType
          :colorType="Number(values.color_type)"
          :status="status"
          @formUpdate="formUpdate"
        />
        <ReceptionDate
          :receptionDate="values.reception_date"
          :status="status"
          @formUpdate="formUpdate"
        />
        <LastModifyDate
          :lastModifyDate="values.last_modify_date"
          :status="status"
          @formUpdate="formUpdate"
        />
        <Advertisement
          :acceptAdvertisement="values.accept_advertisement"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptRating
          :acceptRating="values.accept_rating"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptReviews
          :acceptReviews="values.accept_reviews"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptImpressions
          :acceptImpression="values.accept_impression"
          :status="status"
          @formUpdate="formUpdate"
        />
        <PublishEvaluation
          :publishEvaluation="values.publish_evaluation"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AcceptTypoReports
          :acceptTypoReports="values.accept_typo_reports"
          :status="status"
          @formUpdate="formUpdate"
        />
        <div class="btnWrap">
          <div v-if="status === 0" class="btn">
            <BtnLinkParam
              btnStyle="btn_link9"
              text="書斎へ戻る"
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
import TitleMain from "../components/atoms/formParts/TitleMain";
import AutherName from "../components/atoms/formParts/AutherName";
import IsComplete from "../components/atoms/formParts/IsComplete";
import Genre from "../components/atoms/formParts/Genre";
import CatchCopy from "../components/atoms/formParts/CatchCopy";
import Synopsis from "../components/atoms/formParts/Synopsis";
import Advertisement from "../components/atoms/formParts/Advertisement";
import ReceptionDate from "../components/atoms/formParts/ReceptionDate";
import LastModifyDate from "../components/atoms/formParts/LastModifyDate";

import ExtremeDepiction from "../components/atoms/formParts/ExtremeDepiction";
import ColorType from "../components/atoms/formParts/ColorType";
import Keywords from "../components/atoms/formParts/Keywords";
import AcceptRating from "../components/atoms/formParts/AcceptRating";
import AcceptImpressions from "../components/atoms/formParts/AcceptImpressions";
import AcceptReviews from "../components/atoms/formParts/AcceptReviews";
import PublishEvaluation from "../components/atoms/formParts/PublishEvaluation";
import AcceptTypoReports from "../components/atoms/formParts/AcceptTypoReports";

import BtnLinkParam from "../components/atoms/BtnLinkParam";

import H2 from "../components/atoms/H2";

import formDataToHash from "../lib/formDataToHash";

import { selectStory } from "../queries/query/selectStory";
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
    const idStory = this.id_story;
    if (!idStory) return;
    if (idStory === "new") return;
    const promise = selectStory(idStory, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.story || {};
    });
  },
  data() {
    return {
      values: this.$store.getters.story || {},
      status: 0,
      idUser: "00001",
      idStory: this.$route.params.id_story,
      linkObject: {
        name: "writing-room-view",
        params: {
          idStory: this.id_story,
          idPost: "new"
        }
      }
    };
  },
  computed: {
    parseProps() {
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
        const val = e.target.value === "true" ? true : false;
        this.$set(this.values, name, val);
      } else {
        const name = e.target.name;
        const val = e.target.value;
        this.$set(this.values, name, val);
      }
      this.$store.dispatch("updateStory", this.values);
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
      //TODO:拡張する要リファクタリング
      if (this.id_story === "new" || this.id_story === undefined) {
        const d = new Date();
        const subStoryId = d.getUTCMilliseconds();
        console.log();
        const newIdStory = "dt" + this.id_user + subStoryId;
        return newIdStory;
      }
    },

    submitFormData() {
      //   e.preventDefault();
      //   const thisFrom = document.forms.formStory;
      console.log(this.id_story);
      if (this.id_story === "new") {
        console.log("pass insert");
        const newIdStory = this.idMaker();
        //一次処理
        this.values["id_user"] = this.id_user;
        this.values["id_story"] = newIdStory;
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
