<template>
  <dl>
    <dt>配信開始日</dt>
    <dd>
      <input
        type="date"
        name="reception_date"
        :value="reception_date"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    reception_date: {
      type: String,
      default: null,
    },
  },
  methods: {
    //type, e, name, val
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
