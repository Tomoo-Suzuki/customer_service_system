<template>
  <div class="toTop">Topへ戻る</div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {},
  methods: {}
});
</script>
<style lang="scss" scoped>
@import "../../scss/_color.scss";

.toTop {
  text-align: center;
  color: $upload_blue_dark;
  font-weight: bold;
  //background: #88b83e;
  background: #d6d6d6;
  padding: 0.8rem 0;
}
</style>
