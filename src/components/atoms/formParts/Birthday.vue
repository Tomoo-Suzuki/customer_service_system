<template>
  <dl>
    <dt>生年月日</dt>
    <dd>
      <input
        type="date"
        name="birthday"
        :value="birthday"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    birthday: {
      type: String,
      default: null,
    },
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
