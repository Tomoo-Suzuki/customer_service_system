<template>
  <dl class="require">
    <dt>小説名</dt>
    <dd v-if="status==0">
      <input
        type="text"
        name="title_main"
        :value="title_main"
        required
        placeholder="トリスタンの皇帝"
        @change="formUpdate"
      />
    </dd>
    <dd v-if="status===1">
      <span>{{title_main}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    title_main: {
      type: String,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
