<template>
  <dl>
    <dt>キャッチコピー</dt>
    <dd>
      <span>
        <input
          type="text"
          name="catchCopy"
          :value="catchCopy"
          @change="formUpdate"
          required
          placeholder="前には夢が、隣には仲間が。"
        />
      </span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    catchCopy: {
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
