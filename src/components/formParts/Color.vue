<template>
  <dl>
    <dt>色</dt>
    <dd>
      <select v-model="color" required>
        <option v-for="color in colors" :key="color" required>
          {{
          color
          }}
        </option>
      </select>
      <p>{{ color }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>