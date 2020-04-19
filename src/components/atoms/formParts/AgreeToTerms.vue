<template>
  <dl>
    <dt>
      <span class="ui-checkbox">
        <input type="checkbox" name="agreement" id="agreement" val="1" @change="formUpdate" />
        <span class="ui-checkbox-alternate"></span>
      </span>
      <label class="ui-checkbox-label" for="agreement"></label>
    </dt>
    <dd>
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
