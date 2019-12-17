<template>
  <dl>
    <dt>フリガナ</dt>
    <dd>
      <span>
        <input
          type="text"
          name="lastNameKana"
          :value="lastNameKana"
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
          name="firstNameKana"
          :value="firstNameKana"
          required
          pattern="[ァ-ヴー/s ]+"
          placeholder="キョウコ"
          title="カタカナを入力してください"
          @change="formUpdate"
        />
      </span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    lastNameKana: {
      type: String,
      default: null
    },
    firstNameKana: {
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
