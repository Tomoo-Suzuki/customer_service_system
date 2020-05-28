<template>
  <dl>
    <dt>キャッチコピー</dt>
    <dd v-if="status == 0">
      <span>
        <input
          type="text"
          name="catch_copy"
          :value="catchCopy"
          @change="formUpdate"
          required
          placeholder="前には夢が、隣には仲間が。"
        />
      </span>
    </dd>
    <dd v-if="status === 1">
      <span>{{ catchCopy }}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    catchCopy: {
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
