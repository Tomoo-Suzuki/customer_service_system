<template>
  <main class="form-book">
    <form name="formRegistry">
      <h2>新規ユーザー登録</h2>
      <input type="hidden" name="date_reception" :value="{}" />
      <Email
        :email="properties.email"
        :emailConfirm="properties.email_confirm"
        @formUpdate="formUpdate"
      />
      <UserId :user_id="properties.user_id" @formUpdate="formUpdate" />
      <Password :password="properties.password" @formUpdate="formUpdate" />
      <p>
        ユーザー登録を行うには「利用規約」および「ガイドライン」へ同意いただく必要があります。
        ユーザー登録を完了するためのメールを、登録いただいたメールアドレスへ送信します。
      </p>
      <Magazine :magazine="properties.magazine" @formUpdate="formUpdate" />
      <AgreeToTerms :agreement="properties.agreement" @formUpdate="formUpdate" />
      <p>reCapture導入</p>
      <div class="btnWrap">
        <div class="btn">
          <button @click="submitFormData">ユーザー登録</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import Email from "./atoms/formParts/Email.vue";
import UserId from "./atoms/formParts/UserId.vue";
import Password from "./atoms/formParts/Password.vue";
import Magazine from "./atoms/formParts/Magazine.vue";
import AgreeToTerms from "./atoms/formParts/AgreeToTerms.vue";

import { insertRegistry } from "../queries/mutation/insertRegistry";

export default {
  components: {
    Email,
    UserId,
    Password,
    Magazine,
    AgreeToTerms
  },
  computed: {
    today() {
      const d = new Date();
      return d.toString;
    }
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
    toMutationDispatch(res) {
      this.$store.dispatch("updateAccount", res);
    },
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
