<template>
  <dl>
    <dt>キーワード</dt>
    <dd>
      <select
        name="productNumber"
        :value="productNumber"
        required
        @change="formUpdate"
      >
        <option
          v-for="productNumber in productNumbers"
          :key="productNumber"
          required
        >
          {{ productNumber }}
        </option>
      </select>
      <p>{{ productNumber }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    productNumber: {
      type: String,
      default: null,
    },
    productNumbers: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
