<template>
  <dl>
    <dt>品番</dt>
    <dd>
      <select v-model="productNumber" required>
        <option v-for="productNumber in productNumbers" :key="productNumber" required>
          {{
          productNumber
          }}
        </option>
      </select>
      <p>{{ productNumber }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    productNumber: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>