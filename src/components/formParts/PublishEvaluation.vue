<template>
  <dl>
    <dt>評価の公開</dt>
    <dd>
      <input
        id="type"
        type="radio"
        name="customerType"
        :value="customerType"
        @change="formUpdate"
      />
      <input
        id="type"
        type="radio"
        name="customerType"
        :value="customerType"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    customerType: {
      type: String,
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
