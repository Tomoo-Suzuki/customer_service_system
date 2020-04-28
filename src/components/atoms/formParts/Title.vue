<template>
  <dl class="require">
    <dt>タイトル</dt>
    <dd>
      <div>
        <input
          type="text"
          name="title"
          :value="title"
          required
          placeholder="境界の国"
          @change="formUpdate"
        />
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
