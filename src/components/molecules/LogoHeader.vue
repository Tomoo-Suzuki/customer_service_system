<template>
  <router-link to="/" tag="h1" class="logoWrap" active-class="active" exact>
    <Logo :logoType="'1'" />
  </router-link>
</template>
<script lang="ts">
import Logo from "@/components/atoms/Logo.vue";

export default {
  components: {
    Logo
  },

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
};
</script>
<style lang="scss" scoped>
.logoWrap {
  /deep/.logo {
    display: block;
    margin-right: 1rem;
    width: 15rem;
  }
}
</style>
