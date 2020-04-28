<template>
  <dl class="require">
    <dt>広告の表示</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>表示しない</span>
        <input type="radio" name="accept_advertisement" :value="false" @change="formUpdate" />
      </label>
      <label>
        <span>表示する</span>
        <input type="radio" name="accept_advertisement" :value="true" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    accept_advertisement: {
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
