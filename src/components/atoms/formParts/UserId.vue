<template>
  <dl class="require has_tooltip">
    <dt>ユーザーID</dt>
    <dd v-if="status === 0">
      <input
        type="text"
        name="id_user"
        :value="idUser"
        required
        placeholder="tsex90876"
        autocomplete="userid"
        @change="formUpdate"
      />
      <span class="tooltip"
        >3文字以上。半角の英数字、ハイフン、アンダースコアが使えます。ユーザーIDは一般に公開され、登録後の変更はできません。</span
      >
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    idUser: {
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
    }
  }
});
</script>
<style lang="scss" scoped>
@import "../../../scss/atoms/tooltip";
</style>
