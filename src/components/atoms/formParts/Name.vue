<template>
  <dl>
    <dt>お名前</dt>
    <dd>
      <span>
        <input
          type="text"
          name="last_name"
          :value="last_name"
          @change="formUpdate"
          required
          placeholder="山田"
        />
      </span>
      <span>
        <input
          type="text"
          name="first_name"
          :value="first_name"
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
    last_name: {
      type: String,
      default: null,
    },
    first_name: {
      type: String,
      default: null,
    },
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
