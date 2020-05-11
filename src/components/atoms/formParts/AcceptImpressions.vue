<template>
  <dl class="require">
    <dt>感想の受付</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="accept_impression"
          :value="true"
          :checked="accept_impression === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="accept_impression"
          :value="false"
          :checked="accept_impression === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{accept_impression}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    accept_impression: {
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
