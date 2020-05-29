<template>
  <dl class="require">
    <dt>完結</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label>
        <span>完結</span>
        <input
          type="radio"
          name="is_complete"
          :value="true"
          @change="formUpdate"
          :checked="isComplete === true"
        />
      </label>
      <label>
        <span>執筆中</span>
        <input
          type="radio"
          name="is_complete"
          :value="false"
          @change="formUpdate"
          :checked="isComplete === false"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ isComplete }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    isComplete: {
      type: Boolean,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", 2, e);
    }
  }
});
</script>
<style lang="scss" scoped></style>
