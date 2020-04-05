<template>
  <span>
    <dl>
      <dt>ジャンル</dt>
      <dd>
        <input
          type="email"
          name="mail"
          :value="mail"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="09021334566"
          title="メールアドレス"
          @change="formUpdate"
        />
      </dd>
    </dl>
    <dl>
      <dt>メール(確認用)</dt>
      <dd>
        <input
          type="email2"
          name="mail2"
          :value="mail2"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="09021334566"
          title="メールアドレス確認"
          @change="formUpdate"
        />
      </dd>
    </dl>
  </span>
</template>
<script>
export default {
  props: {
    mail: {
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
