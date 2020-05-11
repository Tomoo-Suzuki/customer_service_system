<template>
  <dl class="require">
    <dt>誤字の報告</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="accept_typo_reports"
          :value="true"
          :checked="accept_typo_reports === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="accept_typo_reports"
          :value="false"
          :checked="accept_typo_reports === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{accept_typo_reports}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    accept_typo_reports: {
      type: Boolean,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 2, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
