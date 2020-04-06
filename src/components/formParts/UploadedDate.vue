<template>
  <dl>
    <dt>配信日</dt>
    <dd>
      <input type="date" name="uploadedDate" :value="uploadedDate" @change="formUpdate" />
      <p>{{ uploadedDate }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    uploadedDate: {
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
