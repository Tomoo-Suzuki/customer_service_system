<template>
  <dl>
    <dt>過激な描写</dt>
    <dd>
      <label>
        <span>残酷な描写</span>
        <input
          id="type"
          type="checkbox"
          name="ExtremeDepiction"
          :value="ExtremeDepiction"
          @change="formUpdate"
        />
        <span>性的な描写</span>
        <input
          id="type"
          type="checkbox"
          name="ExtremeDepiction"
          :value="ExtremeDepiction"
          @change="formUpdate"
        />
        <span>暴力的な描写</span>
        <input
          id="type"
          type="checkbox"
          name="ExtremeDepiction"
          :value="ExtremeDepiction"
          @change="formUpdate"
        />
        <span>グロテスクな描写</span>
        <input
          id="type"
          type="checkbox"
          name="ExtremeDepiction"
          :value="ExtremeDepiction"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    ExtremeDepiction: {
      type: Object,
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
