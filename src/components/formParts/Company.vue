<template>
  <dl>
    <dt>会社名・所属</dt>
    <dd>
      <input type="text" v-model.lazy="company" required placeholder="ソフトバンド" />
      <p>{{ company }}</p>
    </dd>
    <dd>
      <input type="text" v-model.lazy="section" required placeholder="開発" />
      <p>{{ section }}</p>
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
  }
};
</script>
<style lang="scss" scoped></style>