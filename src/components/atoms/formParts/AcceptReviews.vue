<template>
  <dl class="require">
    <dt>レビューの受付</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="accept_reviews"
          :value="true"
          :checked="accept_reviews === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="accept_reviews"
          :value="false"
          :checked="accept_reviews === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{accept_reviews}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    accept_reviews: {
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
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
