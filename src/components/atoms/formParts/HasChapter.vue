<template>
  <dl>
    <dt>章の設定</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label>
        <span>あり</span>
        <input
          type="radio"
          name="has_chapter"
          :value="true"
          @change="formUpdate"
          :checked="hasChapter == true"
        />
      </label>
      <label>
        <span>なし</span>
        <input
          type="radio"
          name="has_chapter"
          :value="false"
          @change="formUpdate"
          :checked="hasChapter == false"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ has_chapter }}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    hasChapter: {
      type: Boolean,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 2, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
