<template>
  <dl>
    <dt>章のタイトル</dt>
    <dd>
      <div>
        <input
          type="text"
          name="title_chapter"
          :value="title_chapter?title_chapter:''"
          required
          placeholder="境界の国"
          @change="formUpdate"
        />
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    title_chapter: {
      type: String,
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
