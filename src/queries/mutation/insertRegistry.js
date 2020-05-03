import formDataToHash from "../../lib/formDataToHash";
import request from "../../lib/request";
export const insertRegistry = (
  form, dispatch
) => {
  const hash = formDataToHash(form);
  console.log(hash)
  const query =
    `mutation{
      insertRegistry(
      email:"` + hash.user_type + `",
      email_confirm:"` + hash.magazine + `",
      id:"` + hash.id + `",
      password:"` + hash.password + `",
      date_reception:"` + hash.date_reception + `",
      ){
        email,
        email_confirm,
        id,
        password,
        date_reception
    }
}`
  request(query, 'insertRegistry', dispatch);

};