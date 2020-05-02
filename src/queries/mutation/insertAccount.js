import formDataToHash from "../../lib/formDataToHash";
import request from "../../lib/request";

export const insertAccount = (
  form, dispatch
) => {
  const hash = formDataToHash(form);
  const query =

    `mutation{
  insertAccount(id:"` + hash.id + `",
          last_name:"` + hash.last_name + `",
          first_name:"` + hash.first_name + `",
          last_name_kana:"` + hash.last_name_kana + `",
          first_name_kana:"` + hash.first_name_kana + `",
          birthday:"` + hash.birthday + `"
          ){
          id,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          birthday
  }
}`;
  request(query, 'insertAccount', dispatch);

};