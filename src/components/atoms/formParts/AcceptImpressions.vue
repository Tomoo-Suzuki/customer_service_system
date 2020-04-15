<template>
  <dl>
    <dt>感想の受付</dt>
    <dd>
      <label>
        <span>受け付ける</span>
        <input
          id="type"
          type="radio"
          name="advertisement"
          :value="advertisement"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          id="type"
          type="radio"
          name="advertisement"
          :value="advertisement"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    advertisement: {
      type: Array,
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
