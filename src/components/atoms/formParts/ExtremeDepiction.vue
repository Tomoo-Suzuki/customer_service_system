<template>
  <dl class="require">
    <!-- {{ extreme_depiction }} -->
    {{ extreme_depiction_data }}
    <!-- {{parse_props}} -->
    <dt>過激な描写</dt>
    <dd v-if="status==0" class="radioAndCheckbox">
      <label v-for="(label, i) in labels" :key="i">
        <span>{{ label }}</span>
        <input
          type="checkbox"
          name="extreme_depiction"
          :value="i"
          @change="formUpdate"
          :checked="extreme_depiction_data[i]==i"
          v-model="extreme_depiction_data"
        />
      </label>
    </dd>
    <dd v-if="status===1">
      <span>{{ extreme_depiction_data}}</span>
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
      extreme_depiction_data: this.extreme_depiction
        ? this.extreme_depiction
        : [],
      labels: ["残酷な描写", "性的な描写", "暴力的な描写", "グロテスクな描写"]
    };
  },
  props: {
    extreme_depiction: {
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
    join_props(array) {
      return array.join(",");
    },
    formUpdate(e) {
      const value = this.join_props(this.extreme_depiction_data);
      this.$emit("formUpdate", 1, e, e.target.name, value);
    }
  }
};
</script>
<style lang="scss" scoped></style>
