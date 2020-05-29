<template>
  <dl>
    <dt>フリガナ</dt>
    <dd v-if="status === 0">
      <div class="form_horizontal">
        <span>
          <input
            type="text"
            name="last_name_kana"
            :value="lastNameKana"
            required
            pattern="[ァ-ヴー/s ]+"
            placeholder="ヤマダ"
            title="カタカナを入力してください"
            @change="formUpdate"
            @blur="formValidator"
          />
        </span>
        <span class="msg">{{ error.last_name_kana }}</span>
      </div>

      <div class="form_horizontal">
        <span>
          <input
            type="text"
            name="first_name_kana"
            :value="firstNameKana"
            required
            pattern="[ァ-ヴー/s ]+"
            placeholder="キョウコ"
            title="カタカナを入力してください"
            @change="formUpdate"
            @blur="formValidator"
          />
        </span>
        <span class="msg">{{ error.first_name_kana }}</span>
      </div>
    </dd>
    <dd v-if="status === 1">
      <div class="form_horizontal">
        <span>{{ last_name_kana }}</span>
      </div>
      <div class="form_horizontal">
        <span>{{ first_name_kana }}</span>
      </div>
    </dd>
  </dl>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    lastNameKana: {
      type: String,
      default: null
    },
    firstNameKana: {
      type: String,
      default: null
    },
    status: {
      type: Number,
      default: null
    },
    error: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", 0, e);
    },
    formValidator(e: Event) {
      this.$emit("formValidator", e);
    }
  }
});
</script>
<style lang="scss" scoped></style>
