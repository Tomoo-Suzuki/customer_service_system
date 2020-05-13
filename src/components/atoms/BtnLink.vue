<template>
  <router-link :to="link" tag="span" class="btn_link" active-class="link_active" exact>{{text}}</router-link>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../../scss/_color.scss";
.btn_link {
  color: #ffffff;
  border: $upload_blue_dark solid 1px;
  background: $upload_blue_dark;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  display: inline-block;
  &:hover {
    opacity: 0.5;
  }
}
</style>