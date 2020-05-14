<template>
  <router-link :to="link" tag="span" :class="btn_style" active-class="link_active" exact>{{text}}</router-link>
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
    },
    btn_style: {
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
%btn_style {
  border-radius: 0.3rem;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  display: inline-block;
  color: #ffffff;
  &:hover {
    opacity: 0.5;
  }
}

.btn_link {
  @extend %btn_style;
  border: $upload_blue_dark solid 1px;
  background: $upload_blue_dark;
}
.btn_link2 {
  @extend %btn_style;
  border: $upload_blue solid 1px;
  background: $upload_blue;
}

.btn_link3 {
  @extend %btn_style;
  border: $upload_blue_light solid 1px;
  background: $upload_blue_light;
}

.btn_link4 {
  @extend %btn_style;
  border: $sell_green_dark solid 1px;
  background: $sell_green_dark;
}
.btn_link5 {
  @extend %btn_style;
  border: $sell_green solid 1px;
  background: $sell_green;
}
.btn_link6 {
  @extend %btn_style;
  border: $sell_green_light solid 1px;
  background: $sell_green_light;
}

.btn_link7 {
  @extend %btn_style;
  border: $read_orange_dark solid 1px;
  background: $read_orange_dark;
}
.btn_link8 {
  @extend %btn_style;
  border: $read_orange solid 1px;
  background: $read_orange;
}
.btn_link9 {
  @extend %btn_style;
  border: $read_orange_light solid 1px;
  background: $read_orange_light;
}
.btn_link10 {
  @extend %btn_style;
  border: #a4a4a4 solid 1px;
  background: #a4a4a4;
}
</style>