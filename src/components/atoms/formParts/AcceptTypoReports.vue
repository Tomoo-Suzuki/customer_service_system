<template>
  <dl class="require">
    <dt>誤字の報告</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="accept_typo_reports"
          :value="true"
          :checked="acceptTypoReports === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="accept_typo_reports"
          :value="false"
          :checked="acceptTypoReports === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ acceptTypoReports }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    acceptTypoReports: {
      type: Boolean,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", 2, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
