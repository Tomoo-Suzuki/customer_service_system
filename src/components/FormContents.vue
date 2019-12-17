<template>
  <main class="form-customer-service">
    <Address
      :zip="properties.zip"
      :prefecture="properties.prefecture"
      :address="properties.address"
      :building="properties.building"
      @formUpdate="formUpdate"
    />

    <Name
      :firstName="properties.firstName"
      :lastName="properties.lastName"
      @formUpdate="formUpdate"
    />
    <NameKana
      :firstNameKana="properties.firstNameKana"
      :lastNameKana="properties.lastNameKana"
      @formUpdate="formUpdate"
    />
    <ReceptionDate :questionaryData="properties" />
    <Company :company="properties.company" :section="properties.section" @formUpdate="formUpdate" />
    <CustomerType :CustomerType="properties.CustomerType" @formUpdate="formUpdate" />
    <Email :mail="properties.mail" @formUpdate="formUpdate" />
    <Tel :tel="properties.tel" @formUpdate="formUpdate" />
    <Color :color="properties.color" @formUpdate="formUpdate" />
    <Detail :detail="properties.detail" @formUpdate="formUpdate" />
    <File :file="properties.file" @formUpdate="formUpdate" />
    <Size :size="properties.size" @formUpdate="formUpdate" />
    <ProductNumber :productNumber="properties.productNumber" @formUpdate="formUpdate" />
    <button @click="postData">送信する</button>
  </main>
</template>

<script>
import axios from "axios";
import Address from "./formParts/Address.vue";
import Name from "./formParts/Name.vue";
import NameKana from "./formParts/NameKana.vue";
import ReceptionDate from "./formParts/ReceptionDate.vue";
import Company from "./formParts/Company.vue";
import CustomerType from "./formParts/CustomerType.vue";
import Email from "./formParts/Email.vue";
import Tel from "./formParts/Tel.vue";
import Color from "./formParts/Color.vue";
import Detail from "./formParts/Detail.vue";
import File from "./formParts/File.vue";
import Size from "./formParts/Size.vue";
import ProductNumber from "./formParts/ProductNumber.vue";

export default {
  components: {
    Address,
    Name,
    NameKana,
    ReceptionDate,
    Company,
    CustomerType,
    Email,
    Tel,
    Color,
    Detail,
    File,
    Size,
    ProductNumber
  },
  data() {
    return {
      formData: {
        fields: {
          firstName: {
            stringValue: this.properties.firstName
          },
          lastName: {
            stringValue: this.properties.lastName
          }
        }
      }
    };
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
      this.properties[name] = val;
    },
    postData() {
      const url =
        "https://firestore.googleapis.com/v1/projects/customer-service-7805c/databases/(default)/documents/properties";
      axios
        .post(url, this.formData)
        .then(function(res) {
          console.log(res);
        })
        .catch();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/form_reset";
@import "../scss/common";
/deep/input,
/deep/textarea {
  border: solid #eeeeee 1px;
}
.form-customer-service {
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
