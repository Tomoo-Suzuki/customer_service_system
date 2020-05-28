<template>
  <dl class="require">
    <dt>レビューの受付</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="accept_reviews"
          :value="true"
          :checked="acceptReviews === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="accept_reviews"
          :value="false"
          :checked="acceptReviews === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ acceptReviews }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    acceptReviews: {
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
