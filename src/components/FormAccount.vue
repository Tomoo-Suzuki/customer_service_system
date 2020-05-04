<template>
  <main class="form-book">
    <form name="formAccount">
      <input type="hidden" name="email_id" value="aryuusei_y@gmail.com" />
      <Name
        :last_name="values.last_name"
        :first_name="values.first_name"
        @formUpdate="formUpdate"
      />
      <NameKana
        :Last_name_kana="values.last_name_kana"
        :first_name_kana="values.first_name_kana"
        @formUpdate="formUpdate"
      />
      <Gender :gender="values.gender" @formUpdate="formUpdate" />
      <Birthday :birthday="values.birthday" @formUpdate="formUpdate" />
      <Email
        :email="values.email"
        :email_confirm="values.email_confirm"
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
import Name from "./atoms/formParts/Name.vue";
import NameKana from "./atoms/formParts/NameKana.vue";
import Gender from "./atoms/formParts/Gender.vue";
import Birthday from "./atoms/formParts/Birthday.vue";
import Email from "./atoms/formParts/Email.vue";

import { selectAccountU } from "../queries/query/selectAccountU.js";
import { insertAccount } from "../queries/mutation/insertAccount.js";

export default {
  components: {
    Name,
    NameKana,
    Gender,
    Email,
    Birthday,
  },
  mounted() {
    const thisForm = document.forms.formAccount;
    const email = thisForm.email_id.value;
    if (!email) return;
    const promise = selectAccountU(email, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.account || {};
    });
  },
  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      values: this.properties,
    };
  },
  methods: {
    toMutationDispatch(res) {
      this.$store.dispatch("updateAccount", res);
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
      const thisFrom = document.formAccount;
      insertAccount(thisFrom, this.toMutationDispatch);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_form.scss";
@import "../scss/atoms/submitBtn/_btnPost.scss";

/deep/input,
/deep/textarea {
  border: solid #eeeeee 1px;
}
.form-book {
  width: 75.6rem;
  margin: 7.2rem auto;
  font-size: 1.4rem;
  /deep/ > dl {
    margin-bottom: 2.4rem;
    display: table;
    /deep/ dt,
    /deep/ dd {
      display: table-cell;
      /deep/input {
        display: inline-block;
        border: #eeeeee solid 1px;
        border-radius: 3px;
        width: 12rem;
        padding: 4px;
        height: 2rem;
      }
    }
    /deep/ dt {
      width: 16rem;
      vertical-align: top;
    }
    /deep/ dd {
      width: 59.6rem;
      > div,
      > span,
      > div > span {
        margin-right: 1.6rem;
      }
      > div {
        margin-bottom: 1.6rem;
      }
    }
  }
}
</style>
