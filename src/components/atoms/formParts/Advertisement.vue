<template>
  <dl class="require">
    <dt>広告の表示</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label>
        <span>表示しない</span>
        <input
          type="radio"
          name="accept_advertisement"
          value="false"
          :checked="acceptAdvertisement === false"
          @change="formUpdate"
        />
      </label>
      <label>
        <span>表示する</span>
        <input
          type="radio"
          name="accept_advertisement"
          value="true"
          :checked="acceptAdvertisement === true"
          @change="formUpdate"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ acceptAdvertisement }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    acceptAdvertisement: {
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
