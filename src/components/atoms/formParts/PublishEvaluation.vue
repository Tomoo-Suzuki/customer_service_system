<template>
  <dl class="require">
    <dt>評価の公開</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label>
        <span>公開する</span>

        <input
          type="radio"
          name="publish_evaluation"
          :value="true"
          :checked="publish_evaluation === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>公開しない</span>

        <input
          type="radio"
          name="publish_evaluation"
          :value="false"
          :checked="publish_evaluation === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{publish_evaluation}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    publish_evaluation: {
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
