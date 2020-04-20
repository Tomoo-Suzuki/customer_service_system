<template>
  <dl>
    <dt>ジェンダー</dt>
    <dd class="radioAndCheckbox">
      <label>
        <span>男性</span>
        <input
          v-model="gender"
          id="man"
          type="radio"
          name="gender"
          value="man"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>女性</span>
        <input id="woman" type="radio" name="gender" value="woman" @change="formUpdate" />
      </label>
      <label>
        <span>その他</span>
        <input id="lgbt" type="radio" name="gender" value="lgbt" @change="formUpdate" />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  data: function() {
    return {
      genderData: this.gender
    };
  },
  props: {
    gender: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.genderData = e.target.value;
      console.log(this.genderData);
      this.$emit("formUpdate_radio", e.targetname, this.genderData);
    }
  }
};
</script>
<style lang="scss" scoped></style>
