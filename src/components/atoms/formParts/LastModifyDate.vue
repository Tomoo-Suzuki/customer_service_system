<template>
  <span>
    <!-- {{ $moment(timestamp).fromNow() }} -->
    <input type="hidden" name="date_last_modify" :value="today" />
  </span>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    today() {
      const d = new Date();
      return d;
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", 0, e);
    }
  }
  //   filters: {
  //     moment(value, format) {
  //       return moment(value).format(format);
  //     },
  //   },
});
</script>
<style lang="scss" scoped></style>
