<template>
  <dl class="require">
    <dt>小説名</dt>
    <dd>
      <input
        type="text"
        name="title_main"
        :value="title_main"
        required
        placeholder="トリスタンの皇帝"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    title_main: {
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
