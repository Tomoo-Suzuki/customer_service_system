<template>
  <dl>
    <dt>章の設定</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>あり</span>
        <input
          type="radio"
          name="has_chapter"
          :value="true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>なし</span>
        <input
          type="radio"
          name="has_chapter"
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
    isComplete: {
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
