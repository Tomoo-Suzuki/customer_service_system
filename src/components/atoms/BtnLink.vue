<template>
  <router-link
    :to="link"
    tag="span"
    :class="btnStyle"
    active-class="link_active"
    exact
    >{{ text }}</router-link
  >
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
    btnStyle: {
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
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .btn_link,
  .btn_link2,
  .btn_link3,
  .btn_link4,
  .btn_link5,
  .btn_link6,
  .btn_link7,
  .btn_link8,
  .btn_link9,
  .btn_link10 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    margin: 0.5rem;
  }
}

@media screen and (max-width: 413px) {
}
</style>
