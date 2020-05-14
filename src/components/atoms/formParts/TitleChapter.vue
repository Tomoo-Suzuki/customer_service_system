<template>
  <dl>
    <dt>章のタイトル</dt>
    <dd v-if="status==0">
      <div>
        <input
          type="text"
          name="title_chapter"
          :value="title_chapter"
          required
          placeholder="境界の国"
          @change="formUpdate"
        />
      </div>
    </dd>
    <dd v-if="status===1">
      <span>{{title_chapter}}</span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    title_chapter: {
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
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
