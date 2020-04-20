<template>
  <dl>
    <dt>評価の公開</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>公開する</span>

        <input type="radio" name="publishEvaluation" :value="0" @change="formUpdate" />
      </label>
      <label>
        <span>公開しない</span>

        <input type="radio" name="publishEvaluation" :value="1" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    publishEvaluation: {
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
