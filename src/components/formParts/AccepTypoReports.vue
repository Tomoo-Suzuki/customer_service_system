<template>
  <dl>
    <dt>サイズ</dt>
    <dd>
      <select name="size" :value="size" required @change="formUpdate">
        <option
          v-for="(data,val) in allSize"
          :key="val"
          :selected="(data.size==='選択してください')?true:false"
          required
        >
          {{
          data.size
          }}
        </option>
      </select>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: null
    },
    allSize: {
      type: Array,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>