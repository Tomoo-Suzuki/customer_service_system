<template>
  <dl class="require">
    <dt>カラータイプ</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>青</span>
        <input type="radio" name="color_type" :value="0" @change="formUpdate" />
      </label>
      <label>
        <span>赤</span>
        <input type="radio" name="color_type" :value="1" @change="formUpdate" />
      </label>
      <label>
        <span>ダーク</span>
        <input type="radio" name="color_type" :value="2" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    color_type: {
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
