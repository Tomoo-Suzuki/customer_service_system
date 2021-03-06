import formDataToHash from "@/lib/formDataToHash";
import request from "@/lib/request";

export const insertAccountU = (form, dispatch) => {
  const hash = formDataToHash(form);
  const query =
    `mutation{
      insertAccountU(id_user:"` +
    hash.id +
    `",
              last_name:"` +
    hash.last_name +
    `",
              first_name:"` +
    hash.first_name +
    `",
              last_name_kana:"` +
    hash.last_name_kana +
    `",
              first_name_kana:"` +
    hash.first_name_kana +
    `",
              birthday:"` +
    hash.birthday +
    `",
              email:"` +
    hash.email +
    `",
              email_confirm:"` +
    hash.email_confirm +
    `"
              ){
              id_user,
              last_name,
              first_name,
              last_name_kana,
              first_name_kana,
              birthday,
              email,
              email_confirm
          }
    }`;
  return request(query, "insertAccountU").then(res => {
    dispatch(res);
  });
};
