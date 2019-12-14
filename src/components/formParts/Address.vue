<template>
  <dl>
    <dt>ご住所</dt>
    <dd>
      <input
        type="text"
        name="zip"
        :value="zip"
        required
        placeholder="117-2345"
        @change="formUpdate"
      />
      <p>{{ zip }}</p>
    </dd>
    <dd>
      <input
        type="text"
        name="prefecture"
        :value="prefecture"
        required
        placeholder="東京都"
        @change="formUpdate"
      />
      <p>{{ prefecture }}</p>
    </dd>
    <dd>
      <input
        type="text"
        name="address"
        :value="address"
        required
        placeholder="豊島区池袋3-7-18"
        @change="formUpdate"
      />
      <p>{{ address }}</p>
    </dd>
    <dd>
      <input
        type="text"
        name="building"
        :value="building"
        required
        placeholder="ブルジュファリハ"
        @change="formUpdate"
      />
      <p>{{ building }}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    zip: {
      type: String,
      default: null
    },
    prefecture: {
      type: String,
      default: null
    },
    address: {
      type: String,
      default: null
    },
    building: {
      type: String,
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