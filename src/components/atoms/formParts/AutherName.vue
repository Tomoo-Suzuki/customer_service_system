<template>
  <dl class="require">
    <dt>作者名</dt>
    <dd v-if="status == 0">
      <input
        type="text"
        name="auther_name"
        :value="autherName"
        @change="formUpdate"
        required
        placeholder="jota(イオタ)"
      />
    </dd>
    <dd v-if="status === 1">
      <span>{{ autherName }}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    autherName: {
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
