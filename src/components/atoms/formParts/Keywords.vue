<template>
  <dl>
    <dt>キーワード</dt>
    <dd v-if="status == 0">
      <input
        type="text"
        name="keywords"
        :value="keywords"
        @change="formUpdate"
      />
      <!-- <input type="text" name="keywords0" value @change="formUpdate" />
      <input type="text" name="keywords1" value @change="formUpdate" />
      <input type="text" name="keywords2" value @change="formUpdate" />
      <input type="text" name="keywords3" value @change="formUpdate" />
      <input type="text" name="keywords4" value @change="formUpdate" />
      <input type="text" name="keywords5" value @change="formUpdate" />
      <input type="text" name="keywords6" value @change="formUpdate" />
      <input type="text" name="keywords7" value @change="formUpdate" />
      <input type="text" name="keywords8" value @change="formUpdate" />
      <input type="text" name="keywords9" value @change="formUpdate" />-->
    </dd>
    <dd v-if="status === 1">
      <span>{{ keywords }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    keywords: {
      type: String,
      default: null
    },
    keywords0: {
      type: String,
      default: null
    },
    keywords1: {
      type: String,
      default: null
    },
    keywords2: {
      type: String,
      default: null
    },
    keywords3: {
      type: String,
      default: null
    },
    keywords4: {
      type: String,
      default: null
    },
    keywords5: {
      type: String,
      default: null
    },
    keywords6: {
      type: String,
      default: null
    },
    keywords7: {
      type: String,
      default: null
    },
    keywords8: {
      type: String,
      default: null
    },
    keywords9: {
      type: String,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", 0, e);
    }
  }
});
</script>
<style lang="scss" scoped></style>
