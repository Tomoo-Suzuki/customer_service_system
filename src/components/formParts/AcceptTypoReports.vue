<template>
  <dl>
    <dt>誤字の報告</dt>
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
    size: {
      type: String,
      default: null
    },
    allSize: {
      type: Array,
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