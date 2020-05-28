<template>
  <dl>
    <dt>配信開始日</dt>
    <dd v-if="status == 0">
      <input
        type="date"
        name="reception_date"
        :value="receptionDate"
        @change="formUpdate"
      />
    </dd>
    <dd v-if="status === 1">
      <span>{{ receptionDate }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  props: {
    receptionDate: {
      type: String,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    //type, e, name, val
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
