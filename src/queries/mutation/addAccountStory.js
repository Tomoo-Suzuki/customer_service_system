export const addAccountStory = (
  hash
) => {
  console.log(hash.last_name);

  return (
    `mutation{
  addAccount(id:"` + hash.id + `",
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
}`)
};