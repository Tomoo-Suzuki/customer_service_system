<template>
  <dl>
    <dt>章のタイトル</dt>
    <dd v-if="status == 0">
      <div>
        <input
          type="text"
          name="title_chapter"
          :value="titleChapter"
          required
          placeholder="境界の国"
          @change="formUpdate"
        />
      </div>
    </dd>
    <dd v-if="status === 1">
      <span>{{ titleChapter }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    titleChapter: {
      type: String,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    //type, e, name, val
    formUpdate(e: Event) {
      this.$emit("formUpdate", 0, e);
    }
  }
});
</script>
<style lang="scss" scoped></style>
