<template>
  <div>
    <h1>test{{properties}}</h1>
    <!--
    <form action="/" enctype="multipart/form-data" type="POST">
      <Address
        :zip="properties.questionaryData.zip"
        :prefecture="properties.questionaryData.prefecture"
        :address="properties.questionaryData.address"
        :building="properties.questionaryData.building"
      />
      <Name
        :firstName="properties.questionaryData.firstName"
        :lastName="properties.questionaryData.lastName"
      />
      <NameKana
        :firstNameKana="properties.questionaryData.firstNameKana"
        :lastNameKana="properties.questionaryData.lastNameKana"
      />
      <ReceptionDate :questionaryData="properties.questionaryData" />
      <Company
        :company="properties.questionaryData.company"
        :section="properties.questionaryData.section"
      />
      <CustomerType :CustomerType="properties.questionaryData.CustomerType" />
      <Email :mail="properties.questionaryData.mail" />
      <Tel :tel="properties.questionaryData.tel" />
      <Color :color="properties.questionaryData.color" />
      <Detail :detail="properties.questionaryData.detail" />
      <File :file="properties.questionaryData.file" />
      <Size :size="properties.questionaryData.size" />
      <ProductNumber :productNumber="properties.questionaryData.productNumber" />
      <button>送信する</button>
    </form>
    -->
  </div>
</template>

<script>
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
  props: {
    test: {
      type: String,
      default: ""
    },
    properties: {
      type: Object
    }
  },
  data() {
    return {
      abc: "77777777"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
