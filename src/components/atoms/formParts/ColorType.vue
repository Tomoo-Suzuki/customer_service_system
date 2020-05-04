<template>
  <dl class="require">
    <dt>カラータイプ</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>青</span>
        <input
          type="radio"
          name="color_type"
          :value="0"
          @change="formUpdate"
          :checked="color_type === 0"
        />
      </label>
      <label>
        <span>赤</span>
        <input
          type="radio"
          name="color_type"
          :value="1"
          @change="formUpdate"
          :checked="color_type === 1"
        />
      </label>
      <label>
        <span>ダーク</span>
        <input
          type="radio"
          name="color_type"
          :value="2"
          @change="formUpdate"
          :checked="color_type === 2"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    color_type: {
      type: Number,
      default: null,
    },
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
