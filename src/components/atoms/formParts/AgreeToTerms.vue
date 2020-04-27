<template>
  <dl>
    <dt>規約に同意する</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>規約に同意する</span>
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          val="1"
          @change="formUpdate"
        />
      </label>

      <a href="/legal/tos" target="_blank">
        利用規約
        <i class="icon-newWindow"></i>
      </a>
      および
      <a href="/legal/guideline" target="_blank">
        ガイドライン
        <i class="icon-newWindow"></i>
      </a>
      に同意する
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    agreement: {
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
