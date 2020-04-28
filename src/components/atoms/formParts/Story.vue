<template>
  <dl class="require">
    <dt>小説</dt>
    <dd>
      <textarea col="30" rows="10" name="story" :value="story" @click="formUpdate"></textarea>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    story: {
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
