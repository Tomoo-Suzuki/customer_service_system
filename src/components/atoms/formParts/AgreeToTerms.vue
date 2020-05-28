<template>
  <div class="radioAndCheckbox">
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
  </div>
</template>
<script lang="ts">
export default {
  props: {
    agreement: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
