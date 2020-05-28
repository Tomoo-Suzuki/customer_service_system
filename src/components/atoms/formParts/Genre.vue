<template>
  <dl class="require">
    <dt>ジャンル</dt>
    <dd v-if="status == 0" class="radioAndCheckbox">
      <label v-for="(genreName, i) in allGenre" :key="i">
        <span>{{ genreName }}</span>
        <input
          type="radio"
          name="genre"
          :value="i"
          @change="formUpdate"
          :checked="genre == i"
        />
      </label>
    </dd>
    <dd v-if="status === 1">
      <span>{{ genre }}</span>
    </dd>
  </dl>
</template>
<script lang="ts">
export default {
  data: function() {
    return {
      allGenre: [
        "異世界ファンタジー",
        "現代ファンタジー",
        "SF",
        "恋愛",
        "ラブコメ",
        "現代ドラマ",
        "ホラー",
        "ミステリー",
        "エッセイ・ノンフィクション",
        "歴史・時代・伝記",
        "創作論・評論",
        "詩・童話・その他"
      ]
    };
  },
  props: {
    genre: {
      type: Number,
      default: null
    },
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    formUpdate(e) {
      this.$emit("formUpdate", 0, e);
    }
  }
};
</script>
<style lang="scss" scoped></style>
