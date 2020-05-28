<template>
  <span>
    <!-- {{ $moment(timestamp).fromNow() }} -->
    <input type="hidden" name="date_last_modify" :value="today" />
  </span>
</template>
<script lang="ts">
export default {
  computed: {
    today() {
      const d = new Date();
      return d;
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
  //   filters: {
  //     moment(value, format) {
  //       return moment(value).format(format);
  //     },
  //   },
};
</script>
<style lang="scss" scoped></style>
