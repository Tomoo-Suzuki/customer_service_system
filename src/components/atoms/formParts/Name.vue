<template>
  <dl>
    <dt>お名前</dt>
    <dd v-if="status === 0">
      <div class="form_horizontal">
        <span>
          <input
            type="text"
            name="last_name"
            :value="lastName"
            required
            placeholder="山田"
            @change="formUpdate"
            @blur="formValidator"
          />
        </span>
        <span class="msg">{{ error.last_name }}</span>
      </div>

      <div class="form_horizontal">
        <span>
          <input
            type="text"
            name="first_name"
            :value="firstName"
            required
            placeholder="京子"
            @change="formUpdate"
            @blur="formValidator"
          />
        </span>
        <span class="msg">{{ error.first_name }}</span>
      </div>
    </dd>
    <dd v-if="status === 1">
      <div class="form_horizontal">
        <span>{{ last_name }}</span>
      </div>

      <div class="form_horizontal">
        <span>{{ first_name }}</span>
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    lastName: {
      type: String,
      default: null
    },
    firstName: {
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
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    },
    formValidator(e) {
      this.$emit("formValidator", e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
