<template>
  <main class="form-book">
    {{ getData() }}
    <form name="formAccount">
      <input type="hidden" name="id" value="00101" />
      <p>ID</p>
      <p>AutherName</p>
      <Name
        :last_name="properties.last_name"
        :first_name="properties.first_name"
        @formUpdate="formUpdate"
      />
      <NameKana :Last_name_kana="properties.last_name_kana" @formUpdate="formUpdate" />
      <Gender :gender="properties.gender" @formUpdate="formUpdate" />
      <Birthday :birthday="properties.birthday" @formUpdate="formUpdate" />
      <Email />
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

import { selectAccount } from "../queries/query/selectAccount.js";
import { insertAccount } from "../queries/mutation/insertAccount.js";

export default {
  components: {
    Name,
    NameKana,
    Gender,
    Email,
    Birthday
  },
  data() {
    return {
      selectAccount: selectAccount,
      values: this.properties
    };
  },
  props: {
    properties: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    accountg() {
      return this.$store.state.account;
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
    getData() {
      selectAccount("00001", this.toMutationDispatch);
    },
    submitFormData(e) {
      e.preventDefault();
      const thisFrom = document.formAccount;
      insertAccount(thisFrom, this.toMutationDispatch);
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
