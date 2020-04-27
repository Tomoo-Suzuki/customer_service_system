<template>
  <main class="form-book">
    {{ getData }}
    <form name="formUser">
      <p>ID</p>
      <p>AutherName</p>
      <Name
        :lastName="properties.lastName"
        :firstName="properties.firstName"
        @formUpdate="formUpdate"
      />
      <NameKana
        :LastNameKana="properties.lastNameKana"
        @formUpdate="formUpdate"
      />
      <Gender :gender="properties.gender" @formUpdate="formUpdate" />
      <Birthday :birthday="properties.birthday" @formUpdate="formUpdate" />
      <Email />
      <button @click="postData">送信する</button>
    </form>
  </main>
</template>
<script>
import axios from "axios";
import Name from "./atoms/formParts/Name.vue";
import NameKana from "./atoms/formParts/NameKana.vue";
import Gender from "./atoms/formParts/Gender.vue";
import Birthday from "./atoms/formParts/Birthday.vue";
import Email from "./atoms/formParts/Email.vue";

import { account } from "../queries/query/account.js";
import request from "../lib/request";

import "../scss/_form.scss";

export default {
  components: {
    Name,
    NameKana,
    Gender,
    Email,
    Birthday,
  },
  data() {
    return {
      account: account,
      values: this.properties,
    };
  },
  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    getData() {
      return request(account, 0);
    },
  },
  methods: {
    // getData1() {
    //   console.log(account);
    //   request(account, 0);
    // },
    formUpdate(e) {
      e.preventDefault();
      const name = e.target.name;
      const val = e.target.value;
      //this.properties[name] = val;
      this.values[name] = val;
    },
    formUpdate_radio(name, val) {
      //   e.preventDefault();
      //   const name = e.target.name;
      //   const val = e.target.value;
      this.properties[name] = val;
      console.log(this.properties);
      //this.values[name] = val;
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
// @import "../scss/_form_reset.scss";
// @import "~/assets/scss/common.scss";
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
