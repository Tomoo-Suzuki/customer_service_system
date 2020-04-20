<template>
  <dl>
    <dt>最終更新日</dt>
    <dd>
      <input type="date" name="lastModifyDate" :value="lastModifyDate" @change="formUpdate" />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    lastModifyDate: {
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
