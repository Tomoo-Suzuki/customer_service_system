<template>
  <dl>
    <dt>商品の画像</dt>
    <dd>
      <label for="a">a</label>
      <input id="a" name="file" type="file" value="file" @change="formUpdate" />
      <p>{{ file }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    file: {
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