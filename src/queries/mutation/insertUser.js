export const insertUser = (
  hash
) => {
  return (
    `mutation{
      insertRegistry(id:"` + hash.id + `",
      password:"` + hash.password + `",
      user_type:"` + hash.user_type + `",
      magazine:"` + hash.magazine + `",
      fagree_to_terms:"` + hash.agree_to_terms + `",
      date_reception:"` + hash.date_reception + `",
      ){
      id,
      password,
      user_type,
      magazine,
      agree_to_terms,
      date_reception
  }
}`)
};