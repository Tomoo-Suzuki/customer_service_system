<template>
  <dl>
    <dt>評価の受付</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="accept_rating"
          :value="true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="accept_rating"
          :value="false"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    accept_rating: {
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
