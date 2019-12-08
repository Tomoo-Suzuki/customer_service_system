<template>
  <dl>
    <dt>商品の画像</dt>
    <dd>
      <label for="a">a</label>
      <input id="a" type="file" value="file" />
      <p>{{ file }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    file: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped></style>