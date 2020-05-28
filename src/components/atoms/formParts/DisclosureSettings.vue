<template>
  <dl>
    <dt>公開設定</dt>
    <dd class="radioAndCheckbox">
      <label>
        <input
          id="type"
          type="radio"
          name="customerType"
          :value="customerType"
          @change="formUpdate"
        />
      </label>
      <label>
        <input
          id="type"
          type="radio"
          name="customerType"
          :value="customerType"
          @change="formUpdate"
        />
      </label>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
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
};
</script>
<style lang="scss" scoped></style>
