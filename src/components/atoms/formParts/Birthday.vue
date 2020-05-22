<template>
  <dl>
    <dt>生年月日</dt>
    <dd v-if="status===0">
      <input
        type="date"
        name="birthday"
        :value="birthday"
        @change="formUpdate"
        @blur="formValidator"
      />
      <span class="msg">{{error.birthday}}</span>
    </dd>
    <dd v-if="status===1">
      <span>{{birthday}}</span>
    </dd>
  </dl>
</template>
<script>
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
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
    formValidator(e) {
      this.$emit("formValidator", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
