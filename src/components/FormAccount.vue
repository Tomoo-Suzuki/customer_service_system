<template>
  <main class="form-book">
    <H2 text="アカウント登録" />
    <div v-if="status===0||status===1">
      {{values}}
      {{this.$store.getters.account}}
      <form name="formAccount">
        <input type="hidden" name="email_id" value="ryuusei_y@gmail.com" />
        <Name
          :last_name="values.last_name"
          :first_name="values.first_name"
          :status="status"
          @formUpdate="formUpdate"
        />
        <NameKana
          :last_name_kana="values.last_name_kana"
          :first_name_kana="values.first_name_kana"
          :status="status"
          @formUpdate="formUpdate"
        />
        <Gender :gender="values.gender" :status="status" @formUpdate="formUpdate" />
        <Birthday :birthday="values.birthday" :status="status" @formUpdate="formUpdate" />
        <Email
          :email="values.email"
          :email_confirm="values.email_confirm"
          :status="status"
          @formUpdate="formUpdate"
        />
        <div class="btnWrap">
          <div v-if="status===0" class="btn">
            <span @click="progressStatus(1),setFormDataToState">確認する</span>
          </div>
          <div v-if="status===1" class="btn">
            <span @click="progressStatus(0)">戻る</span>
            <button @click="submitFormData, progressStatus(2)">送信する</button>
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
import Name from "./atoms/formParts/Name.vue";
import NameKana from "./atoms/formParts/NameKana.vue";
import Gender from "./atoms/formParts/Gender.vue";
import Birthday from "./atoms/formParts/Birthday.vue";
import Email from "./atoms/formParts/Email.vue";

import H2 from "./atoms/H2.vue";

import formDataToHash from "../lib/formDataToHash";

import { selectAccountU } from "../queries/query/selectAccountU.js";
import { insertAccountU } from "../queries/mutation/insertAccountU.js";

export default {
  components: {
    Name,
    NameKana,
    Gender,
    Email,
    Birthday,
    H2
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
  data() {
    return {
      values: this.$store.getters.account || {},
      status: 0
    };
  },
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
      const thisForm = document.forms.formAccount;
      const thisFormData = formDataToHash(thisForm);
      this.$store.dispatch("updateAccount", thisFormData);
      this.values = this.$store.getters.account;
    },
    submitFormData(e) {
      e.preventDefault();
      const thisFrom = document.formAccount;
      insertAccountU(thisFrom, this.toMutationDispatch);
    }
  }
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
