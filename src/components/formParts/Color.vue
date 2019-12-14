<template>
  <dl>
    <dt>色</dt>
    <dd>
      <select required name="color">
        <option v-for="color in colors" :key="color" required @change="formUpdate">
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
    },
    colors: {
      type: Object,
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