<template>
  <dl>
    <dt>お電話番号</dt>
    <dd>
      <input
        type="text"
        name="tel"
        :value="tel"
        required
        placeholder="09021334566"
        pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    tel: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
