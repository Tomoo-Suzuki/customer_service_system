import formDataToHash from "../../lib/formDataToHash";
import request from "../../lib/request";
export const insertRegistry = (form, dispatch) => {
  const hash = formDataToHash(form);
  const query =
    `mutation{
      insertRegistry(
      email:"` +
    hash.email +
    `",
      email_confirm:"` +
    hash.email_confirm +
    `",
      id_user:"` +
    hash.id_user +
    `",
      password:"` +
    hash.password +
    `",
      date_reception:"` +
    hash.date_reception +
    `",
      ){
        email,
        email_confirm,
        id_user,
        password,
        date_reception
    }
}`;
  request(query, "insertRegistry", dispatch);
};