<template>
  <dl>
    <dt>小説名</dt>
    <dd>
      <input
        type="text"
        name="titleMain"
        :value="titleMain"
        required
        placeholder="トリスタンの皇帝"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    titleMain: {
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
