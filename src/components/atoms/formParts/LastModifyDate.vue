<template>
  <dl>
    <dt>最終更新日</dt>
    <dd>
      <input
        type="date"
        name="last_modify_date"
        :value="last_modify_date"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    last_modify_date: {
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
