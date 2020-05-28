<template>
  <main class="form-book">
    <ProgressTracker :txtArray="txtArray" :status="status" />
    <H2 text="新規ユーザー登録" />
    <div v-if="status === 0 || status === 1">
      <form name="formRegistry">
        <input type="hidden" name="date_reception" :value="today" />
        <Email
          :email="values.email"
          :emailConfirm="values.email_confirm"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @blur="formValidator"
        />
        <UserId
          :id_user="values.id_user"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @blur="formValidator"
        />
        <Password
          :password="values.password"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @blur="formValidator"
        />
        <p>
          ユーザー登録を行うには「利用規約」および「ガイドライン」へ同意いただく必要があります。
          ユーザー登録を完了するためのメールを、登録いただいたメールアドレスへ送信します。
        </p>
        <Magazine
          :magazine="values.magazine"
          :status="status"
          @formUpdate="formUpdate"
        />
        <AgreeToTerms
          :agreement="values.agreement"
          :status="status"
          @formUpdate="formUpdate"
        />
        <p>reCapture導入</p>
        <div class="btnWrap">
          <div v-if="status === 0" class="btn">
            <button @click="submitFormData, progressStatus(2)">送信する</button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="status === 2">
      <div>ご登録ありがとうございました。</div>
    </div>
  </main>
</template>

<script>
import Email from "../components/atoms/formParts/Email.vue";
import UserId from "../components/atoms/formParts/UserId.vue";
import Password from "../components/atoms/formParts/Password.vue";
import Magazine from "../components/atoms/formParts/Magazine.vue";
import AgreeToTerms from "../components/atoms/formParts/AgreeToTerms.vue";

import H2 from "../components/atoms/H2.vue";
import ProgressTracker from "../components/atoms/ProgressTracker.vue";

import formDataToHash from "../lib/formDataToHash";

import { insertRegistry } from "../queries/mutation/insertRegistry";

export default {
  components: {
    Email,
    UserId,
    Password,
    Magazine,
    AgreeToTerms,
    H2,
    ProgressTracker
  },
  computed: {
    today() {
      const d = new Date();
      return d.toString();
    }
  },
  data() {
    return {
      values: this.$store.getters.story || {},
      error: this.$store.getters.error,
      status: 0,
      txtArray: ["入力・編集", "確認", "完了"]
    };
  },
  //   props: {
  //     properties: {
  //       type: Object,
  //       default: () => ({})
  //     }
  //   },
  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updateAccount", res);
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
      const thisFrom = document.forms.formRegistry;
      insertRegistry(thisFrom, this.toMutationDispatch);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/btnPost";
</style>
