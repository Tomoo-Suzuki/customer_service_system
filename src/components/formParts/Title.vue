<template>
  <dl>
    <dt>タイトル</dt>
    <dd>
      <div>
        <input
          type="text"
          name="company"
          :value="company"
          required
          placeholder="ソフトバンド"
          @change="formUpdate"
        />
      </div>
      <div>
        <input
          type="text"
          name="section"
          :value="section"
          required
          placeholder="開発"
          @change="formUpdate"
        />
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    company: {
      type: String,
      default: null,
    },
    section: {
      type: String,
      default: null,
    },
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
