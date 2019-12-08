<template>
  <dl>
    <dt>ご住所</dt>
    <dd>
      <input
        type="text"
        v-model.lazy="zip"
        placeholder="1230000"
        pattern="\d{3}-?\d{4}"
        title="郵便番号"
      />
      <p>{{ }}</p>
    </dd>
    <dd>
      <input type="text" v-model.lazy="zip" required placeholder="117-2345" />
      <p>{{ zip }}</p>
    </dd>
    <dd>
      <input type="text" v-model.lazy="prefecture" required placeholder="東京都" />
      <p>{{ prefecture }}</p>
    </dd>
    <dd>
      <input type="text" v-model.lazy="address" required placeholder="豊島区池袋3-7-18" />
      <p>{{ address }}</p>
    </dd>
    <dd>
      <input type="text" v-model.lazy="building" required placeholder="ブルジュファリハ" />
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
  }
};
</script>
<style lang="scss" scoped></style>