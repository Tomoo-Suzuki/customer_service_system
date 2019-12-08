<template>
  <dl>
    <dt>メール</dt>
    <dd>
      <input
        type="email"
        v-model.number="mail"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
        placeholder="09021334566"
        title="メールアドレス"
      />
      <p>{{ tel }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    mail: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>