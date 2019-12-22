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
    <Size :size="properties.size" :all-size="allSize" @formUpdate="formUpdate" />
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
      },
      allSize: [
        { size: "選択してください", value: "選択してください" },
        { size: "10.0", value: "1" },
        { size: "10.5", value: "2" },
        { size: "11.0", value: "3" },
        { size: "11.5", value: "4" },
        { size: "12.0", value: "5" },
        { size: "12.5", value: "6" },
        { size: "13.0", value: "7" },
        { size: "13.5", value: "8" },
        { size: "14.0", value: "9" },
        { size: "14.5", value: "10" },
        { size: "15.0", value: "11" },
        { size: "15.5", value: "12" },
        { size: "16.0", value: "13" },
        { size: "16.5", value: "14" },
        { size: "17.0", value: "15" },
        { size: "17.5", value: "16" },
        { size: "18.0", value: "17" },
        { size: "18.5", value: "18" },
        { size: "19.0", value: "19" },
        { size: "19.5", value: "20" },
        { size: "20.0", value: "21" },
        { size: "20.5", value: "22" },
        { size: "21.0", value: "23" },
        { size: "21.5", value: "24" },
        { size: "22.0", value: "25" },
        { size: "22.5", value: "26" },
        { size: "23.0", value: "27" },
        { size: "23.5", value: "28" },
        { size: "24.0", value: "29" },
        { size: "24.5", value: "30" },
        { size: "25.0", value: "31" },
        { size: "25.5", value: "32" },
        { size: "26.0", value: "33" },
        { size: "26.5", value: "34" },
        { size: "27.0", value: "35" },
        { size: "27.5", value: "36" },
        { size: "28.0", value: "37" },
        { size: "28.5", value: "38" },
        { size: "29.0", value: "39" },
        { size: "30.0", value: "40" },
        { size: "30.5", value: "41" },
        { size: "31.0", value: "42" },
        { size: "31.5", value: "43" },
        { size: "32.0", value: "44" },
        { size: "32.5", value: "45" }
      ]
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
