<template>
  <dl>
    <dt>個人・法人のお客様</dt>
    <dd>
      <input id="type" type="radio" v-model="customerType" />
      <input id="type" type="radio" v-model="customerType" />
      <p>{{ customerType }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    customerType: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>