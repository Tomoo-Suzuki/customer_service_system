<template>
  <dl>
    <dt>レビューの受付</dt>
    <dd>
      <label>
        <span>受け付ける</span>
        <input
          id="type"
          type="radio"
          name="Advertisement"
          :value="customerType"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          id="type"
          type="radio"
          name="Advertisement"
          :value="customerType"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    customerType: {
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
