<template>
  <dl>
    <dt>メール</dt>
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
      <p>{{ mail }}</p>
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
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>