<template>
  <dl class="require">
    <dt>過激な描写</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label v-for="(label, i) in labels" :key="i">
        <span>{{ label }}</span>
        <input
          type="checkbox"
          name="extreme_depiction"
          :value="i"
          @change="formUpdate"
          :checked="extremeDepictionData[i] == i"
          v-model="extremeDepictionData"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ extremeDepictionData }}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  //   mounted() {
  //     console.log(this.extreme_depiction);
  //     if (this.extreme_depiction) {
  //       this.extreme_depiction_data = this.extreme_depiction;
  //     }
  //   },
  data() {
    return {
      extremeDepictionData: this.extremeDepiction ? this.extremeDepiction : [],
      labels: ["残酷な描写", "性的な描写", "暴力的な描写", "グロテスクな描写"]
    };
  },
  props: {
    extremeDepiction: {
      type: Array,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  computed: {
    thisChecked() {
      if (!this.extreme_depiction) return;
      return function(i) {
        this.extreme_depiction.map(select => {
          return select === i;
        });
      };
    }
  },
  methods: {
    joinProps(array) {
      return array.join(",");
    },
    formUpdate(e) {
      const value = this.joinProps(this.extreme_depiction_data);
      this.$emit("formUpdate", 1, e, e.target.name, value);
    }
  }
};
</script>
<style lang="scss" scoped></style>
