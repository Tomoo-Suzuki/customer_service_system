<template>
  <dl>
    <dt>配信開始日</dt>
    <dd v-if="status==0">
      <input type="date" name="reception_date" :value="reception_date" @change="formUpdate" />
    </dd>
    <dd v-if="status===1">
      <span>{{reception_date}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    reception_date: {
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
