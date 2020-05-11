<template>
  <dl>
    <dt>生年月日</dt>
    <dd v-if="status===0">
      <input type="date" name="birthday" :value="birthday" @change="formUpdate" />
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
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
