<template>
  <dl class="require">
    <dt>感想の受付</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label>
        <span>受け付ける</span>
        <input
          type="radio"
          name="acceptImpression"
          :value="true"
          :checked="acceptImpression === true"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>受け付けない</span>
        <input
          type="radio"
          name="acceptImpression"
          :value="false"
          :checked="acceptImpression === false"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ acceptImpression }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    acceptImpression: {
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
