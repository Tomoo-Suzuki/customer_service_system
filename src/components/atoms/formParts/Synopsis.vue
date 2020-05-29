<template>
  <dl>
    <dt>あらすじ</dt>
    <dd v-if="status == 0">
      <textarea
        col="30"
        rows="10"
        name="synopsis"
        :value="synopsis"
        @click="formUpdate"
      ></textarea>
    </dd>
    <dd v-if="status === 1">
      <span>{{ synopsis }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    synopsis: {
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
<style lang="scss" scoped></style>
