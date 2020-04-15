<template>
  <dl>
    <dt>カラータイプ</dt>
    <dd>
      <label>
        <span>青</span>
        <input
          id="type"
          type="radio"
          name="Advertisement"
          :value="customerType"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>赤</span>
        <input
          id="type"
          type="radio"
          name="Advertisement"
          :value="customerType"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>ダーク</span>
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
