<template>
  <dl>
    <dt>配信開始日</dt>
    <dd>
      <input type="date" name="receptionDate" :value="receptionDate" @change="formUpdate" />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    receptionDate: {
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
