<template>
  <dl class="require">
    <dt>完結</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label>
        <span>完結</span>
        <input
          type="radio"
          name="is_complete"
          :value="true"
          @change="formUpdate"
          :checked="is_complete === true"
        />
      </label>
      <label>
        <span>執筆中</span>
        <input
          type="radio"
          name="is_complete"
          :value="false"
          @change="formUpdate"
          :checked="is_complete === false"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{is_complete}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    is_complete: {
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
