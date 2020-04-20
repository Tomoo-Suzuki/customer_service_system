<template>
  <dl>
    <dt>あらすじ</dt>
    <dd>
      <textarea col="30" rows="10" name="synopsis" :value="synopsis" @click="formUpdate"></textarea>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    synopsis: {
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
