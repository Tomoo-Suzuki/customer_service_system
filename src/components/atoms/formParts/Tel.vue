<template>
  <dl>
    <dt>お電話番号</dt>
    <dd>
      <input
        type="text"
        name="tel"
        :value="tel"
        required
        placeholder="09021334566"
        pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
        @change="formUpdate"
        @blur="formValidator"
      />
      <span class="msg">{error.gender}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    tel: {
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
    formUpdate(e: Event) {
      this.$emit("formUpdate", e);
    },
    formValidator(e: Event) {
      this.$emit("formValidator", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
