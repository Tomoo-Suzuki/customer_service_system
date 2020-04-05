<template>
  <dl>
    <dt>小説</dt>
    <dd>
      <textarea
        col="30"
        rows="10"
        name="detail"
        :value="detail"
        @click="formUpdate"
      ></textarea>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    detail: {
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
