<template>
  <div>
    {{properties}}
    <form action="/" enctype="multipart/form-data" type="POST">
      -->
      <Address
        :zip="properties.zip"
        :prefecture="properties.prefecture"
        :address="properties.address"
        :building="properties.building"
      />

      <Name :firstName="properties.firstName" :lastName="properties.lastName" />
      <NameKana :firstNameKana="properties.firstNameKana" :lastNameKana="properties.lastNameKana" />
      <ReceptionDate :questionaryData="properties" />
      <Company :company="properties.company" :section="properties.section" />
      <CustomerType :CustomerType="properties.CustomerType" />
      <Email :mail="properties.mail" />
      <Tel :tel="properties.tel" />
      <Color :color="properties.color" />
      <Detail :detail="properties.detail" />
      <File :file="properties.file" />
      <Size :size="properties.size" />
      <ProductNumber :productNumber="properties.productNumber" />
      <button>送信する</button>
    </form>
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
    properties: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
