<template>
  <dl>
    <dt>ジェンダー</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>男性</span>
        <input
          v-model="gender"
          id="type"
          type="radio"
          name="gender"
          :value="man"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>女性</span>
        <input id="type" type="radio" name="gender" :value="woman" @change="formUpdate" />
      </label>
      <label>
        <span>その他</span>
        <input id="type" type="radio" name="gender" :value="lgbt" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    gender: {
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
