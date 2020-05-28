<template>
  <span>
    <dl class="require">
      <dt>メール</dt>
      <dd v-if="status === 0">
        <input
          type="email"
          name="email"
          :value="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="xxxx@aaa.co.jp"
          title="メールアドレス"
          @change="formUpdate"
          @blur="formValidator"
        />
        <span class="msg">{{ error.email }}</span>
      </dd>
      <dd v-if="status === 1">
        <span>{{ email }}</span>
      </dd>
    </dl>
    <dl class="require">
      <dt>メール(確認用)</dt>
      <dd v-if="status === 0" class="has_tooltip">
        <input
          type="email"
          name="email_confirm"
          :value="emailConfirm"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="xxxx@aaa.co.jp"
          title="メールアドレス確認"
          @change="formUpdate"
          @blur="formValidator"
        />
        <span class="msg">{{ error.email_confirm }}</span>

        <span class="tooltip">
          運営よりメールでご連絡する場合があります。普段利用されているメールアドレスを入力してください。
          確実にメールを受信するために、携帯電話でのみ受信可能なメールアドレスを避け、パソコン等でも受信できるメールアドレスをお使いいただくことをお勧めします。
        </span>
      </dd>
      <dd v-if="status === 1">
        <span>{{ email_confirm }}</span>
      </dd>
    </dl>
  </span>
</template>
<script lang="ts">
export default {
  props: {
    email: {
      type: String,
      default: null
    },
    emailConfirm: {
      type: String,
      default: null
    },
    status: {
      type: Number,
      default: null
    },
    error: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
    formValidator(e) {
      this.$emit("formValidator", e);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../scss/atoms/tooltip";
</style>
