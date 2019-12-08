<template>
  <dl>
    <dt>サイズ</dt>
    <dd>
      <select v-model="size" required>
        <option v-for="size in allSize" :key="size" required>
          {{
          room
          }}
        </option>
      </select>
      <p>{{ size }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>