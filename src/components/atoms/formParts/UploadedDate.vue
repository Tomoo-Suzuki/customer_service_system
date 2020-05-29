<template>
  <dl>
    <dt>配信日</dt>
    <dd>
      <input
        type="date"
        name="uploadedDate"
        :value="uploadedDate"
        @change="formUpdate"
      />
      <p>{{ uploadedDate }}</p>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    uploadedDate: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", e);
    }
  }
});
</script>
<style lang="scss" scoped></style>
