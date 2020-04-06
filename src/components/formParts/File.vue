<template>
  <dl>
    <dt>イラストの画像</dt>
    <dd>
      <input id="a" name="file" type="file" value="file" @change="formUpdate" />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    file: {
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
