<template>
  <router-link
    to="/writing-room"
    tag="div"
    class="btn_priority"
    active-class="link_active"
    exact
    >書 斎</router-link
  >
</template>

<script lang="ts"></script>

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

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .btn_priority {
    position: absolute;
    bottom: -3.5rem;
    right: 0;
    border-radius: 0.4rem;
    color: #ffffff;
    padding: 0.5rem 3rem;
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 413px) {
}
</style>
