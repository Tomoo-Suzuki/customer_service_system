<template>
  <dl>
    <dt>ジェンダー</dt>
    <dd>
      <label>
        <span>男性</span>
        <input
          id="type"
          type="radio"
          name="gender"
          :value="gender"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>女性</span>
        <input
          id="type"
          type="radio"
          name="gender"
          :value="gender"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>その他</span>
        <input
          id="type"
          type="radio"
          name="gender"
          :value="gender"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    gender: {
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
