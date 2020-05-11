<template>
  <dl class="require">
    {{ extreme_depiction_data }}
    <dt>過激な描写</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label v-for="(label, i) in labels" :key="i">
        <span>{{ label }}</span>
        <input
          type="checkbox"
          name="extreme_depiction"
          :value="i"
          @change="formUpdate"
          v-model="extreme_depiction_data"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{ extreme_depiction}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  data() {
    return {
      extreme_depiction_data: [],
      labels: ["残酷な描写", "性的な描写", "暴力的な描写", "グロテスクな描写"]
    };
  },
  props: {
    extreme_depiction: {
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
      this.$emit(
        "formUpdate",
        1,
        e,
        e.target.name,
        this.extreme_depiction_data
      );
    }
  }
};
</script>
<style lang="scss" scoped></style>
