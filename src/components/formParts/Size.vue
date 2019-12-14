<template>
  <dl>
    <dt>サイズ</dt>
    <dd>
      <select name="size" :value="size" required @change="formUpdate">
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