<template>
  <dl>
    <dt>パスワード</dt>
    <dd>
      <input
        :type="pwType"
        name="password"
        :value="password"
        required
        placeholder="tsex90876"
        @change="formUpdate"
      />
      <button @click="togglePwDesplay">表示</button>
    </dd>
    <dd>8文字以上。半角英数字、半角記号が使えます。</dd>
  </dl>
</template>
<script>
export default {
  data: function() {
    return {
      pwType: "password",
      pwDisplay: false
    };
  },
  props: {
    password: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    },
    togglePwDesplay() {
      if (this.pwDisplay === false) {
        this.pwType = "text";
        this.pwDisplay = true;
      } else if (this.pwDisplay === true) {
        this.pwType = "password";
        this.pwDisplay = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
