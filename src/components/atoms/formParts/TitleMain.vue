<template>
  <dl class="require">
    <dt>小説名</dt>
    <dd v-if="status == 0">
      <input
        type="text"
        name="title_main"
        :value="titleMain"
        required
        placeholder="トリスタンの皇帝"
        @change="formUpdate"
      />
    </dd>
    <dd v-if="status === 1">
      <span>{{ titleMain }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    titleMain: {
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
};
</script>
<style lang="scss" scoped></style>
