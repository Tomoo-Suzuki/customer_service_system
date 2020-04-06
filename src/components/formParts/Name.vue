<template>
  <dl>
    <dt>お名前</dt>
    <dd>
      <span>
        <input
          type="text"
          name="lastName"
          :value="lastName"
          @change="formUpdate"
          required
          placeholder="山田"
        />
      </span>
      <span>
        <input
          type="text"
          name="firstName"
          :value="firstName"
          required
          placeholder="京子"
          @change="formUpdate"
        />
      </span>
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
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
