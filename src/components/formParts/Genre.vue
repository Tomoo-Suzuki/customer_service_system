<template>
  <span>
    <dl>
      <dt>ジャンル</dt>
      <dd>
        <label>
          <span>異世界ファンタジー</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>現代ファンタジー</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>SF</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>恋愛</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>ラブコメ</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>現代ドラマ</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>ホラー</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>ミステリー</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>エッセイ・ノンフィクション</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>歴史・時代・伝記</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>創作論・評論</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
        <label>
          <span>詩・童話・その他</span>
          <input id="type" type="radio" name="genre" :value="genre" @change="formUpdate" />
        </label>
      </dd>
    </dl>
  </span>
</template>
<script>
export default {
  props: {
    mail: {
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
