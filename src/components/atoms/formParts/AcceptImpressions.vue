<template>
  <dl>
    <dt>感想の受付</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input type="radio" name="acceptImpressions" :value="0" @change="formUpdate" />
      </label>
      <label>
        <span>受け付けない</span>
        <input type="radio" name="acceptImpressions" :value="1" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    acceptImpressions: {
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
