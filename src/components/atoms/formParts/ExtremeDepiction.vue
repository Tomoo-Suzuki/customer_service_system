<template>
  <dl>
    {{extremeDepictionData}}
    <dt>過激な描写</dt>
    <dd class="radioAndCheckbox">
      <label v-for="(label,i) in labels" :key="i">
        <span>{{label}}</span>
        <input
          type="checkbox"
          name="extremeDepiction"
          :value="i"
          @change="formUpdate_array"
          v-model="extremeDepictionData"
        />
      </label>
    </dd>
  </dl>
</template>
<script>
export default {
  data() {
    return {
      extremeDepictionData: [],
      labels: ["残酷な描写", "性的な描写", "暴力的な描写", "グロテスクな描写"]
    };
  },
  props: {
    extremeDepiction: {
      type: Array,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    },
    formUpdate_array(e) {
      this.$emit("formUpdate_array", e.target.name, this.extremeDepictionData);
    }
  }
};
</script>
<style lang="scss" scoped></style>
