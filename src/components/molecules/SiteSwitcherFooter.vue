<template>
  <nav class="siteSwitcher_footer">
    <div>
      <ul>
        <li>
          <a href>BOOKMAで買う</a>
        </li>
        <li>
          <a href>BOOKMAで書く</a>
        </li>
        <li>
          <a href>BOOKMAで読む</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {},
  methods: {}
});
</script>
<style lang="scss" scoped>
.siteSwitcher_footer {
  a {
    color: #ffffff;
    &:hover {
      opacity: 0.5;
    }
  }
  > div {
    margin: 0.5rem 0;
    > ul {
      margin: 3rem 0;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
}
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .siteSwitcher_footer {
    font-size: 1rem;
    width: 95%;
    margin: auto;
    > div > ul > li > a {
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
