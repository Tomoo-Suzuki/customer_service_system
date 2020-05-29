<template>
  <div class="logo">
    <div class="imgWrap">
      <img
        :src="require(`../../assets/img/logo_${logoTxt}.svg`)"
        :alt="'bookma logo ' + logoTxt"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    logoType: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {
      class: "",
      src: "",
      text: ""
    };
  },
  methods: {},
  computed: {
    logoTxt() {
      if (this.logoType === "0") {
        return "sale";
      } else if (this.logoType === "1") {
        return "upload";
      } else if (this.logoType === "2") {
        return "read";
      }
      return "";
    }
  }
});
</script>
<style lang="scss" scoped>
.logo {
  display: block;
  margin-right: 1rem;

  .imgWrap {
    > img {
      width: 100%;
    }
  }
}
</style>
