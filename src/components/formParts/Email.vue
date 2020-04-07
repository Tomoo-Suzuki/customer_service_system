<template>
  <span>
    <dl>
      <dt>メール</dt>
      <dd>
        <input
          type="email"
          name="email"
          :value="email"
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
          name="email2"
          :value="email2"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="09021334566"
          title="メールアドレス確認"
          @change="formUpdate"
        />
      </dd>
      <dd>
        運営よりメールでご連絡する場合があります。普段利用されているメールアドレスを入力してください。
        確実にメールを受信するために、携帯電話でのみ受信可能なメールアドレスを避け、パソコン等でも受信できるメールアドレスをお使いいただくことをお勧めします。
      </dd>
    </dl>
  </span>
</template>
<script>
export default {
  props: {
    email: {
      type: String,
      default: null,
    },
    email2: {
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
