<template>
  <main class="form-book">
    <form name="formUser">
      <h2 class="ttl_h2">ログイン</h2>
      <input type="hidden" name="id" value="00003" />
      <UserId
        :idUser="values.id_user"
        :status="status"
        @formUpdate="formUpdate"
      />
      <Password
        :password="values.password"
        :status="status"
        @formUpdate="formUpdate"
      />
      <div>
        <router-link
          to="/form-registration"
          tag="a"
          class="link_login"
          active-class="link_active"
          exact
          >ご登録がお済みでない方はこちら。</router-link
        >
      </div>
      <div>
        <router-link
          to="/form-registration"
          tag="a"
          class="link_login"
          active-class="link_active"
          exact
          >パスワードの再発行はこちら。</router-link
        >
      </div>
      <div class="btnWrap">
        <div class="btn">
          <button @click="submitFormData">ログイン</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import UserId from "../components/atoms/formParts/UserId.vue";
import Password from "../components/atoms/formParts/Password.vue";

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
      values: this.$store.getters.story || {},
      status: 0
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
.link_login {
  display: inline-block;
  margin: 2rem 0 0 0;
  position: relative;
  &::before {
    position: absolute;
    top: 0.4rem;
    left: -1.2rem;
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: $upload_blue_dark;
  }
  &:hover {
    opacity: 0.5;
  }
}
.btnWrap {
  margin-top: 5rem;
}
</style>
