<template>
  <dl>
    <dt>パスワード</dt>
    <dd>
      <input
        type="text"
        name="password"
        :value="password"
        required
        placeholder="tsex90876"
        @change="formUpdate"
      />
    </dd>
    <dd>
      8文字以上。半角英数字、半角記号が使えます。
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    password: {
      type: Object,
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
