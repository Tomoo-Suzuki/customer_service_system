<template>
  <router-link
    to="/writing-room"
    tag="div"
    class="btn_priority"
    active-class="link_active"
    exact
  >書 斎</router-link>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../scss/_color";

.btn_priority {
  position: absolute;
  bottom: -5rem;
  right: 0;
  background: $sell_green_dark;
  background: $read_orange_light;
  //color: $read_orange_light;
  border-radius: 0.4rem;
  color: #ffffff;
  padding: 1rem 7rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
</style>
