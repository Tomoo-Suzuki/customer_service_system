<template>
  <dl>
    <dt>完結</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>完結</span>
        <input
          type="radio"
          name="is_complete"
          :value="true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>執筆中</span>
        <input
          type="radio"
          name="is_complete"
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
    is_complete: {
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
