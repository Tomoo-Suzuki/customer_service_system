<template>
  <dl>
    <dt>カラータイプ</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>青</span>
        <input type="radio" name="colorType" :value="'blue'" @change="formUpdate" />
      </label>
      <label>
        <span>赤</span>
        <input type="radio" name="colorType" :value="'red'" @change="formUpdate" />
      </label>
      <label>
        <span>ダーク</span>
        <input type="radio" name="colorType" :value="'dark'" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    colorType: {
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
