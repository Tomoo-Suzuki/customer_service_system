<template>
  <div>
    <form action="/" enctype="multipart/form-data" type="POST">
      <dl>
        <dt>お名前</dt>
        <dd>
          <div>
            <input
              type="text"
              name="lastName"
              v-model.lazy="eventData.lastName"
              required
              placeholder="山田"
            />
            <p>{{ eventData.lastName }}</p>
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              v-model.lazy="eventData.firstName"
              required
              placeholder="京子"
            />
            <p>{{ eventData.firstName }}</p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>フリガナ</dt>
        <dd>
          <div>
            <input
              type="text"
              name="lastNameKana"
              v-model.lazy="eventData.lastNameKana"
              required
              pattern="[ァ-ヴー/s ]+"
              placeholder="ヤマダ"
              title="カタカナを入力してください"
            />
            <p>{{ eventData.lastNameKana }}</p>
          </div>
          <div>
            <input
              type="text"
              name="firstNameKana"
              v-model.lazy="eventData.firstNameKana"
              required
              pattern="[ァ-ヴー/s ]+"
              placeholder="キョウコ"
              title="カタカナを入力してください"
            />
            <p>{{ eventData.firstNameKana }}</p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>会社名・所属</dt>
        <dd>
          <input
            type="text"
            v-model.lazy="eventData.company"
            required
            placeholder="ソフトバンド"
          />
          <p>{{ eventData.company }}</p>
        </dd>
        <dd>
          <input
            type="text"
            v-model.lazy="eventData.section"
            required
            placeholder="開発"
          />
          <p>{{ eventData.section }}</p>
        </dd>
      </dl>
      <dl>
        <dt>住所</dt>
        <dd>
          <input
            type="text"
            v-model.lazy="eventData.zip"
            placeholder="1230000"
            pattern="\d{3}-?\d{4}"
            title="郵便番号"
          />
          <p>{{ eventData.zip }}</p>
        </dd>
        <dd>
          <input
            type="text"
            v-model.lazy="eventData.prefecture"
            required
            placeholder="東京都"
          />
          <p>{{ eventData.prefecture }}</p>
        </dd>
        <dd>
          <input
            type="text"
            v-model.lazy="eventData.address"
            required
            placeholder="豊島区池袋3-7-18"
          />
          <p>{{ eventData.addres }}</p>
        </dd>
        <dd>
          <input
            type="text"
            v-model.lazy="eventData.building"
            required
            placeholder="ブルジュファリハ"
          />
          <p>{{ eventData.building }}</p>
        </dd>
      </dl>

      <dl>
        <dt>お電話番号</dt>
        <dd>
          <input
            type="text"
            v-model.number="eventData.tel"
            required
            placeholder="09021334566"
            pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
          />
          <p>{{ eventData.tel }}</p>
        </dd>
      </dl>
      <dl>
        <dt>メール</dt>
        <dd>
          <input
            type="text"
            v-model.number="eventData.mail"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="09021334566"
            title="メールアドレス"
          />
          <p>{{ eventData.tel }}</p>
        </dd>
      </dl>
      <dl>
        <dt>パスワード</dt>
        <dd>
          <input
            type="text"
            v-model.number="eventData.mail"
            required
            pattern="(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{6,}"
            placeholder="09021334566"
            title="半角英大文字・半角英小文字・半角数字いれずれも必ず含む6文字以上"
          />
          <p>{{ eventData.tel }}</p>
        </dd>
      </dl>
      <dl>
        <dt>ご参加人数</dt>
        <dd>
          <input
            type="number"
            v-model.number="eventData.participants"
            required
            min="1"
            max="8"
            title="ご予約は１から８名様となります。"
          />
          <p>{{ eventData.participants }}</p>
        </dd>
      </dl>

      <dl>
        <dt>ご希望日1</dt>
        <dd>
          <input type="date" v-model.number="eventData.date1" />
          <p>{{ eventData.date1 }}</p>
        </dd>
      </dl>
      <dl>
        <dt>ご希望日2</dt>
        <dd>
          <input type="date" v-model.number="eventData.date2" />
          <p>{{ eventData.date2 }}</p>
        </dd>
      </dl>
      <dl>
        <dt>ご希望日3</dt>
        <dd>
          <input type="date" v-model.number="eventData.date3" />
          <p>{{ eventData.date3 }}</p>
        </dd>
      </dl>

      <dl>
        <dt>喫煙・禁煙</dt>
        <dd>
          <label for="ciger">喫煙</label>
          <input
            type="radio"
            :value="true"
            v-model="eventData.ciger"
            required
          />
          <p>{{ eventData.ciger }}</p>
          <label for="ciger">禁煙</label>
          <input type="radio" :value="false" v-model="eventData.ciger" />
          <p>{{ eventData.noCiger }}</p>
        </dd>
      </dl>

      <dl>
        <dt>オプション</dt>
        <dd>
          <label for="a">a</label>
          <input
            id="a"
            type="checkbox"
            value="オプションa"
            v-model="eventData.option"
          />
          <label for="b">b</label>
          <input
            id="b"
            type="checkbox"
            value="オプションb"
            v-model="eventData.option"
          />
          <label for="c">c</label>
          <input
            id="c"
            type="checkbox"
            value="オプションc"
            v-model="eventData.option"
          />
          <label for="d">d</label>
          <input
            id="d"
            type="checkbox"
            value="オプションd"
            v-model="eventData.option"
          />
          <p>{{ eventData.option }}</p>
        </dd>
      </dl>

      <dl>
        <dt>お部屋のタイプ</dt>
        <dd>
          <select v-model="eventData.roomTypes" required>
            <option v-for="room in roomTypes" :key="room" required>{{
              room
            }}</option>
          </select>
          <p>{{ eventData.room }}</p>
        </dd>
      </dl>
      <dl>
        <dt>その他のご希望</dt>
        <dd>
          <textarea
            col="30"
            rows="10"
            v-model.trim="eventData.detail"
          ></textarea>
        </dd>
      </dl>
      <button>送信する</button>
    </form>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      roomTypes: ["extra", "sweet", "large", "mideum", "normal"],
      eventData: {
        firstName: "",
        lastName: "",
        firstNameKana: "",
        lastNameKana: "",
        company: "",
        section: "",
        participants: 0,
        date1: "",
        date2: "",
        date3: "",
        detail: "",
        ciger: false,
        option: [],
        roomType: "選択してください"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
:required {
}
/*

:optional {
}
:valid {
}
:invalid {
  border: red solid 1px;
}
*/
</style>
