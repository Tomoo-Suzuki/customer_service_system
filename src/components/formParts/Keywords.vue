<template>
  <dl>
    <dt>キーワード</dt>
    <dd>
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
      <input
        type="text"
        name="keyword_array[]"
        value="スターウォーズ"
        data-name="キーワード"
        data-no="10"
        data-taglength="10"
        size="20"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    productNumber: {
      type: String,
      default: null,
    },
    productNumbers: {
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
