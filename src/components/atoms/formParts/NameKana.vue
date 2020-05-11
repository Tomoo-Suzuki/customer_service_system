<template>
  <dl>
    <dt>フリガナ</dt>
    <dd v-if="status===0">
      <span>
        <input
          type="text"
          name="last_name_kana"
          :value="last_name_kana"
          required
          pattern="[ァ-ヴー/s ]+"
          placeholder="ヤマダ"
          title="カタカナを入力してください"
          @change="formUpdate"
        />
      </span>
      <span>
        <input
          type="text"
          name="first_name_kana"
          :value="first_name_kana"
          required
          pattern="[ァ-ヴー/s ]+"
          placeholder="キョウコ"
          title="カタカナを入力してください"
          @change="formUpdate"
        />
      </span>
    </dd>
    <dd v-if="status===1">
      <span>{{last_name_kana}}</span>
      <span>{{first_name_kana}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    last_name_kana: {
      type: String,
      default: null
    },
    first_name_kana: {
      type: String,
      default: null
    },
    status: {
      type: Number,
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
