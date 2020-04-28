<template>
  <dl class="require">
    <dt>評価の公開</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>公開する</span>

        <input type="radio" name="publish_evaluation" :value="true" @change="formUpdate" />
      </label>
      <label>
        <span>公開しない</span>

        <input type="radio" name="publish_evaluation" :value="false" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    publish_evaluation: {
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
