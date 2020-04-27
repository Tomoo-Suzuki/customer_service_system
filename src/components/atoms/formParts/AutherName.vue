<template>
  <dl>
    <dt>作者名</dt>
    <dd>
      <input
        type="text"
        name="auther_name"
        :value="auther_name"
        @change="formUpdate"
        required
        placeholder="jota(イオタ)"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    auther_name: {
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
