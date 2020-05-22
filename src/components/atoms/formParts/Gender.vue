<template>
  <dl class="require">
    <dt>ジェンダー</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label>
        <span>男性</span>
        <input
          id="man"
          type="radio"
          name="gender"
          :value="0"
          :checked="gender === 0"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>女性</span>
        <input
          id="woman"
          type="radio"
          name="gender"
          :value="1"
          :checked="gender === 1"
          @change="formUpdate"
          @blur="formValidator"
        />
      </label>
      <label>
        <span>その他</span>
        <input
          id="lgbt"
          type="radio"
          name="gender"
          :value="2"
          :checked="gender === 2"
          @change="formUpdate"
          @blur="formValidator"
        />
      </label>
      <span class="msg">{{error.gender}}</span>
    </dd>
    <dd v-if="status===1">
      <span>{{gender}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    gender: {
      type: Number,
      default: null
    },
    status: {
      type: Number,
      default: null
    },
    error: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formUpdate(e) {
      this.genderData = Number(e.target.value);
      console.log(this.genderData);
      this.$emit("formUpdate", 1, e, e.target.name, this.genderData);
    },
    formValidator(e) {
      this.$emit("formValidator", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
