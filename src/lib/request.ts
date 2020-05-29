import axios from "axios";

export default function request(que:any, key:string) {
  const url = "http://localhost:7777/graphql";
  return axios
    .post(url, {
      query: que
    })
    .then(function (res) {
      const hash = res.data.data[key]
      return hash
    })
    .catch(function (e) {
      console.log(e);
    });
}
