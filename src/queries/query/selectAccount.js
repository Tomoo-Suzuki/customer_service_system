import request from "../../lib/request";

export const selectAccount = (id, dispatch) => {

  const query = `{
  selectAccount(id:"` + id + `") {
    id,
    last_name,
    first_name,
    last_name_kana,
    first_name_kana,
    tel,
    email,
    email_confirm,
    birthday,
    zip,
    prefecture,
    city,
    address3,
    building,
    purpose
  }
}`
  request(query, 'selectAccount', dispatch);

};