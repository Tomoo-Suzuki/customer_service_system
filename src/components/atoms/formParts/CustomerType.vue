<template>
  <dl>
    <dt>個人・法人のお客様</dt>
    <dd>
      <input
        id="type"
        type="radio"
        name="customerType"
        :value="customerType"
        @change="formUpdate"
      />
      <input
        id="type"
        type="radio"
        name="customerType"
        :value="customerType"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    customerType: {
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
