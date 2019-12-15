<template>
  <dl>
    <dt>会社名・所属</dt>
    <dd>
      <input
        type="text"
        name="company"
        :value="company"
        required
        placeholder="ソフトバンド"
        @change="formUpdate"
      />
    </dd>
    <dd>
      <input
        type="text"
        name="section"
        :value="section"
        required
        placeholder="開発"
        @change="formUpdate"
      />
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    company: {
      type: String,
      default: null
    },
    section: {
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
