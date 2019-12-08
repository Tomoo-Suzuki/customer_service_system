<template>
  <dl>
    <dt>お困りの内容</dt>
    <dd>
      <textarea col="30" rows="10" v-model.trim="detail"></textarea>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    detail: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>