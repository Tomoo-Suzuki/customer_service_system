<template>
  <dl>
    <dt>お名前</dt>
    <dd>
      <div>
        <input type="text" name="lastName" v-model.lazy="lastName" required placeholder="山田" />
        <p>{{ lastName }}</p>
      </div>
      <div>
        <input type="text" name="firstName" v-model.lazy="firstName" required placeholder="京子" />
        <p>{{ firstName }}</p>
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    lastName: {
      type: String,
      default: null
    },
    firstName: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped></style>