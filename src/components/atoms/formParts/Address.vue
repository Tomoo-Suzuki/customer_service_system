<template>
  <dl>
    <dt>ご住所</dt>
    <dd class="adress-data-wrap">
      <div>
        <input
          type="text"
          name="zip"
          :value="zip"
          required
          placeholder="117-2345"
          @change="formUpdate"
        />
      </div>
      <div>
        <span>
          <input
            type="text"
            name="prefecture"
            :value="prefecture"
            required
            placeholder="東京都"
            @change="formUpdate"
          />
        </span>
        <span>
          <input
            type="text"
            name="address1"
            :value="address1"
            required
            placeholder="豊島区池袋"
            @change="formUpdate"
          />
        </span>
        <span>
          <input
            type="text"
            name="address2"
            :value="addres2"
            required
            placeholder="3-7-18"
            @change="formUpdate"
          />
        </span>
        <span>
          <input
            type="text"
            name="building"
            :value="building"
            required
            placeholder="ブルジュファリハ"
            @change="formUpdate"
          />
        </span>
      </div>
    </dd>
  </dl>
</template>
<script lang="ts">
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
<style lang="scss" scoped>
.adress-data-wrap {
  > span {
    display: inline-block;
  }
}
</style>
