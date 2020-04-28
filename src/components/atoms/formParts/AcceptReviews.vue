<template>
  <dl class="require">
    <dt>レビューの受付</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input type="radio" name="accept_reviews" :value="true" @change="formUpdate" />
      </label>
      <label>
        <span>受け付けない</span>
        <input type="radio" name="accept_reviews" :value="false" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    accept_reviews: {
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
