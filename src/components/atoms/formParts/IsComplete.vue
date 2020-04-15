<template>
  <dl>
    <dt>完結</dt>
    <dd>
      <label>
        <span>完結</span>
        <input id="type" type="radio" name="isComplete" :value="customerType" @change="formUpdate" />
      </label>
      <label>
        <span>執筆中</span>
        <input id="type" type="radio" name="isComplete" :value="customerType" @change="formUpdate" />
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
