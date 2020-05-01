<template>
  <main class="form-book">
    {{ getData }}
    <form name="formUser">
      <div>■プログレストラッカー</div>
      <h2>新規ユーザー登録</h2>
      <input type="hidden" name="id" value="00003" />
      {{ this.properties }}
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

import { user } from "../queries/query/user";
import { addUser } from "../queries/mutation/addUser";
import request from "../lib/request";

export default {
  components: {
    Email,
    UserId,
    Password,
    Magazine,
    AgreeToTerms
  },
  data() {
    return {
      values: this.properties
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    getData() {
      return request(user, 0);
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
      const useForm = document.formUser;
      const formData = new FormData(useForm);
      let tempHash = {};
      for (let item of formData) {
        tempHash[item[0]] = item[1];
      }
      request(addUser(tempHash), 1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/btnPost";
</style>
