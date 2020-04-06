<template>
  <dl>
    <dt>評価の公開</dt>
    <dd>
      <span>公開する</span>

      <input
        id="type"
        type="radio"
        name="customerType"
        :value="customerType"
        @change="formUpdate"
      />
      <span>公開しない</span>

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
