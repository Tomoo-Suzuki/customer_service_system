<template>
  <dl>
    <dt>メールマガジンを受けとる</dt>
    <dd>
      <span class="ui-checkbox">
        <input
          type="checkbox"
          name="agreement"
          id="input-agreement"
          tabindex="4"
        />
        <span class="ui-checkbox-alternate"></span> </span
      ><label class="ui-checkbox-label" for="input-agreement"
        ><a href="/legal/tos" target="_blank"
          >利用規約 <i class="icon-newWindow"></i
        ></a>
        および
        <a href="/legal/guideline" target="_blank"
          >ガイドライン <i class="icon-newWindow"></i
        ></a>
        に同意する</label
      >
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    magazine: {
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
