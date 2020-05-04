<template>
  <dl>
    <dt>最終更新日</dt>
    <dd>
      <!-- {{ $moment(timestamp).fromNow() }} -->
      <input type="hidden" name="date_last_modify" :value="today" />
    </dd>
  </dl>
</template>
<script>
export default {
  computed: {
    today() {
      const d = new Date();
      return d;
    },
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
  },
  //   filters: {
  //     moment(value, format) {
  //       return moment(value).format(format);
  //     },
  //   },
};
</script>
<style lang="scss" scoped></style>
