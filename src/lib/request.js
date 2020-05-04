import axios from "axios";
// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);



export default function request(que, key) {
  const url = "http://localhost:7777/graphql";
  return axios
    .post(url, {
      query: que
    })
    .then(function (res) {
      const hash = res.data.data[key];
      return hash
    })
    .catch(function (e) {
      console.log("反映テスト01");
      console.log(e);
    });
}