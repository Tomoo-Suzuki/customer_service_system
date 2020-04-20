<template>
  <dl>
    <dt>キーワード</dt>
    <dd>
      <input type="text" name="keywords0" value @change="formUpdate" />
      <input type="text" name="keywords1" value @change="formUpdate" />
      <input type="text" name="keywords2" value @change="formUpdate" />
      <input type="text" name="keywords3" value @change="formUpdate" />
      <input type="text" name="keywords4" value @change="formUpdate" />
      <input type="text" name="keywords5" value @change="formUpdate" />
      <input type="text" name="keywords6" value @change="formUpdate" />
      <input type="text" name="keywords7" value @change="formUpdate" />
      <input type="text" name="keywords8" value @change="formUpdate" />
      <input type="text" name="keywords9" value @change="formUpdate" />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    keywords0: {
      type: String,
      default: null
    },
    keywords1: {
      type: String,
      default: null
    },
    keywords2: {
      type: String,
      default: null
    },
    keywords3: {
      type: String,
      default: null
    },
    keywords4: {
      type: String,
      default: null
    },
    keywords5: {
      type: String,
      default: null
    },
    keywords6: {
      type: String,
      default: null
    },
    keywords7: {
      type: String,
      default: null
    },
    keywords8: {
      type: String,
      default: null
    },
    keywords9: {
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
