<template>
  <main class="form-book">
    <form name="formUser">
      <h2 class="ttl_h2">ログイン</h2>
      <input type="hidden" name="id" value="00003" />
      <UserId :user_id="properties.user_id" @formUpdate="formUpdate" />
      <Password :password="properties.password" @formUpdate="formUpdate" />
      <router-link to="/form-registration" tag="a" active-class="link_active" exact>ご登録がお済みでない方はこちら。</router-link>
      <br />
      <router-link to="/form-registration" tag="a" active-class="link_active" exact>パスワードの再発行はこちら。</router-link>
      <div class="btnWrap">
        <div class="btn">
          <button @click="submitFormData">ログイン</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import UserId from "./atoms/formParts/UserId.vue";
import Password from "./atoms/formParts/Password.vue";

import { selectUser } from "../queries/query/selectUser";
import { insertUser } from "../queries/mutation/insertUser";
import request from "../lib/request";

export default {
  components: {
    UserId,
    Password
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
      return request(selectUser, 0);
    }
  },

  props: {
    properties: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    toMutationDispatch(res) {
      this.$state.dispatch("updateUser", res);
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
      const thisFrom = document.forms.formUser;
      insertUser(thisFrom, this.toMutationDispatch);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/btnPost";
</style>
