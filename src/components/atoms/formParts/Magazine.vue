<template>
  <dl>
    <dt>メールマガジンを受けとる</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>メールマガジンを受けとる</span>
        <input type="checkbox" name="magazine" value="1" @change="formUpdate" />
      </label>
      <p>旬の情報やメルマガ限定コンテンツを運営よりお届けします。</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    magazine: {
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
