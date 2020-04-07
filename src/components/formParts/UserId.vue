<template>
  <dl>
    <dt>ユーザーID</dt>
    <dd>
      <input
        type="text"
        name="useId"
        :value="useId"
        required
        placeholder="tsex90876"
        @change="formUpdate"
      />
    </dd>
    <dd>
      3文字以上。半角の英数字、ハイフン、アンダースコアが使えます。ユーザーIDは一般に公開され、登録後の変更はできません。
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    useId: {
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
