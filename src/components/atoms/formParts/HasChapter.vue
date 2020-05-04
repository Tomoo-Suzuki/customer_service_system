<template>
  <dl>
    <dt>章の設定</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>あり</span>
        <input
          type="radio"
          name="has_chapter"
          :value="true"
          @change="formUpdate"
          :checked="has_chapter==true"
        />
      </label>
      <label>
        <span>なし</span>
        <input
          type="radio"
          name="has_chapter"
          :value="false"
          @change="formUpdate"
          :checked="has_chapter==false"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    has_chapter: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
