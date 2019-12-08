<template>
  <dl>
    <dt>フリガナ</dt>
    <dd>
      <div>
        <input
          type="text"
          name="lastNameKana"
          v-model.lazy="lastNameKana"
          required
          pattern="[ァ-ヴー/s ]+"
          placeholder="ヤマダ"
          title="カタカナを入力してください"
        />
        <p>{{ lastNameKana }}</p>
      </div>
      <div>
        <input
          type="text"
          name="firstNameKana"
          v-model.lazy="firstNameKana"
          required
          pattern="[ァ-ヴー/s ]+"
          placeholder="キョウコ"
          title="カタカナを入力してください"
        />
        <p>{{ firstNameKana }}</p>
      </div>
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
  }
};
</script>
<style lang="scss" scoped></style>