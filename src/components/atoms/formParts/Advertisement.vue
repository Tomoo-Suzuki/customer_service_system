<template>
  <dl>
    <dt>広告の表示</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>表示しない</span>
        <input type="radio" name="advertisement" :value="0" @change="formUpdate" />
      </label>
      <label>
        <span>表示する</span>
        <input type="radio" name="advertisement" :value="1" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    advertisement: {
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
