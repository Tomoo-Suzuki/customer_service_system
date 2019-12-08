<template>
  <dl>
    <dt>お電話番号</dt>
    <dd>
      <input
        type="text"
        v-model.number="tel"
        required
        placeholder="09021334566"
        pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
      />
      <p>{{ tel }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    tel: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>