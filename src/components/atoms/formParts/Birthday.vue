<template>
  <dl>
    <dt>生年月日</dt>
    <dd v-if="status === 0">
      <input
        type="date"
        name="birthday"
        :value="birthday"
        @change="formUpdate"
        @blur="formValidator"
      />
      <span class="msg">{{ error.birthday }}</span>
    </dd>
    <dd v-if="status === 1">
      <span>{{ birthday }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    birthday: {
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
      this.$emit("formUpdate", 0, e);
    },
    formValidator(e: Event) {
      this.$emit("formValidator", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
