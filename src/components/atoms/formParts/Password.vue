<template>
  <div>
    <dl class="require has_tooltip">
      <dt>パスワード</dt>
      <dd v-if="status === 0">
        <input
          :type="pwType"
          name="password"
          :value="password"
          required
          placeholder="tsex90876"
          autocomplete="current-password"
          @change="formUpdate"
        />
        <span class="tooltip">8文字以上。半角英数字、半角記号が使えます。</span>
      </dd>
      <dd v-if="status === 1">
        <span>{{ password }}</span>
      </dd>
    </dl>
    <button @click="togglePwDesplay" class="btn_password">表示</button>
  </div>
</template>
<script lang="ts">
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
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", 0, e);
    },
    togglePwDesplay(e) {
      e.preventDefault();
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
<style lang="scss" scoped>
@import "../../../scss/atoms/tooltip";
@import "../../../scss/atoms/submitBtn/btnPassword";
</style>
