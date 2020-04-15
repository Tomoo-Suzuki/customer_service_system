<template>
  <dl>
    <dt>広告の表示</dt>
    <dd>
      <label>
        <span>表示しない</span>
        <input
          id="type"
          type="radio"
          name="advertisement"
          :value="advertisement"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>表示する</span>
        <input
          id="type"
          type="radio"
          name="advertisement"
          :value="advertisement"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    advertisement: {
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
