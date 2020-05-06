<template>
  <router-link to="/" class="logo" tag="a" active-class="active" exact>
    <div class="imgWrap">
      <img :src="require(`../../assets/img/logo_${logoTxt}.svg`)" :alt="'bookma logo '+logoTxt" />
    </div>
  </router-link>
</template>
<script>
export default {
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
