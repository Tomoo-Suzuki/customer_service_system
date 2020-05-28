<template>
  <main class="form-book">
    <ProgressTracker :txtArray="txtArray" :status="status" />
    <H2 text="アカウント設定" />
    <div v-if="status === 0 || status === 1">
      <form name="formAccount">
        <input type="hidden" name="email_id" value="ryuusei_y@gmail.com" />
        <Name
          :lastName="values.last_name"
          :firstName="values.first_name"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @formValidator="formValidator"
        />
        <NameKana
          :lastNameKana="values.last_name_kana"
          :firstNameKana="values.first_name_kana"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @formValidator="formValidator"
        />
        <Gender
          :gender="values.gender"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @formValidator="formValidator"
        />
        <Birthday
          :birthday="values.birthday"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @formValidator="formValidator"
        />
        <Email
          :email="values.email"
          :emailConfirm="values.email_confirm"
          :status="status"
          :error="error"
          @formUpdate="formUpdate"
          @formValidator="formValidator"
        />
        <div class="btnWrap">
          <div v-if="status === 0" class="btn">
            <span @click="allValidateConfirm()">確認する</span>
          </div>
          <div v-if="status === 1" class="btn">
            <span @click="progressStatus(0)">戻る</span>
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
<script lang="ts">
import Name from "@/components/atoms/formParts/Name";
import NameKana from "@/components/atoms/formParts/NameKana";
import Gender from "@/components/atoms/formParts/Gender";
import Birthday from "@/components/atoms/formParts/Birthday";
import Email from "@/components/atoms/formParts/Email";

import H2 from "@/components/atoms/H2";
import ProgressTracker from "@/components/atoms/ProgressTracker";

import formDataToHash from "@/lib/formDataToHash";

import { selectAccountU } from "@/queries/query/selectAccountU";
import { insertAccountU } from "@/queries/mutation/insertAccountU";

import validatator from "@/lib/validate/";

export default {
  components: {
    Name,
    NameKana,
    Gender,
    Email,
    Birthday,
    H2,
    ProgressTracker
  },
  created() {
    const initErrorAndFlag = {
      error: {
        lastName: "",
        firstName: "",
        lastNameKana: "",
        firstNameKana: "",
        email: "",
        emailConfirm: "",
        gender: "",
        birthday: ""
      },
      flagValidate: {
        lastName: false,
        firstName: false,
        lastNameKana: false,
        firstNameKana: false,
        birthday: false,
        email: false,
        emailConfirm: false,
        gender: false
      }
    };
    this.$store.dispatch("initErrorAndFlag", initErrorAndFlag);
  },
  mounted() {
    const thisForm = document.forms.formAccount;
    const email = thisForm.email_id.value;
    if (email) return;
    const promise = selectAccountU(email, this.toMutationDispatch);
    promise.then(() => {
      this.values = this.$store.getters.account || {};
    });
  },
  data() {
    return {
      values: this.$store.getters.account || {},
      status: 0,
      //   error: this.upddateError,
      txtArray: ["入力・編集", "確認", "完了"]
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    formValidator(e: Event) {
      validatator(e, this.$store.dispatch);
    },
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
    allValidateConfirm() {
      const flags = this.$store.getters.flagValidate;
      // const user = this.props.account.user;
      let allflags = null;
      Object.keys(flags).map(key => {
        if (!flags[key]) {
          allflags -= 1;
          const tempHash = {};
          tempHash.key = key;
          tempHash.val = "ご選択・ご入力をお願いいたします。";
          this.$store.dispatch("updateErrorMsg", tempHash);
        } else {
          allflags = 0;
        }
      });
      if (allflags === 0) {
        this.setFormDataToState();
        this.progressStatus(1);
      }
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
  > dl {
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
