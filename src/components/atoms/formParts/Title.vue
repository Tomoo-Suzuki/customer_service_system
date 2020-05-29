<template>
  <dl class="require">
    <dt>タイトル</dt>
    <dd v-if="status == 0">
      <div>
        <input
          type="text"
          name="title"
          :value="title"
          :status="status"
          required
          placeholder="境界の国"
          @change="formUpdate"
        />
      </div>
    </dd>
    <dd v-if="status === 1">
      <span>{{ title }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
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
