<template>
  <main class="form-book">
    {{ getData }}
    <form name="formUser">
      <div>■プログレストラッカー</div>
      <h2>新規ユーザー登録</h2>
      {{ this.properties }}
      <Email
        :email="properties.email"
        :emailConfirm="properties.emailConfirm"
        @formUpdate="formUpdate"
      />
      <UserId :UserId="properties.UserId" @formUpdate="formUpdate" />
      <Password :password="properties.password" @formUpdate="formUpdate" />
      <p>
        ユーザー登録を行うには「利用規約」および「ガイドライン」へ同意いただく必要があります。
        ユーザー登録を完了するためのメールを、登録いただいたメールアドレスへ送信します。
      </p>
      <Magazine :magazine="properties.magazine" @formUpdate="formUpdate" />
      <AgreeToTerms
        :agreement="properties.agreement"
        @formUpdate="formUpdate"
      />
      <p>reCapture導入</p>
      <button @click="postData">ユーザー登録</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import Email from "./atoms/formParts/Email.vue";
import UserId from "./atoms/formParts/UserId.vue";
import Password from "./atoms/formParts/Password.vue";
import Magazine from "./atoms/formParts/Magazine.vue";
import AgreeToTerms from "./atoms/formParts/AgreeToTerms.vue";

import { user } from "../queries/query/user";
import request from "../lib/request";

import "../scss/_form.scss";

export default {
  components: {
    Email,
    UserId,
    Password,
    Magazine,
    AgreeToTerms,
  },
  data() {
    return {
      values: this.properties,
    };
  },
  computed: {
    getData() {
      return request(user, 0);
    },
  },

  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formUpdate(e) {
      e.preventDefault();
      const name = e.target.name;
      const val = e.target.value;
      //this.properties[name] = val;
      this.values[name] = val;
    },
    postData() {
      const thisForm = document.formUser;
      const fd = new FormData(thisForm);
      const url =
        "https://firestore.googleapis.com/v1/projects/customer-service-7805c/databases/(default)/documents/properties";
      axios
        .post(url, fd)
        .then(function(res) {
          console.log(res);
        })
        .catch();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
</style>
