<template>
  <dl>
    <dt>イラストの画像</dt>
    <dd>
      <input id="a" name="file" type="file" value="file" @change="formUpdate" />
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    file: {
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
