<template>
  <dl class="require">
    <dt>小説</dt>
    <dd v-if="status == 0">
      <textarea
        col="30"
        rows="10"
        name="story"
        :status="status"
        :value="story"
        @click="formUpdate"
      ></textarea>
    </dd>
    <dd v-if="status === 1">
      <span>{{ story }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    story: {
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
