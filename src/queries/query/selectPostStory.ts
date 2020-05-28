import request from "../../lib/request";
//selectPostとselectPostStory は重複してる
export const selectPostStory = (idStory, dispatch) => {
  const query =
    `query{
    selectPostStory(id_story:"` +
    idStory +
    `"){
    id_story,
    id_post,
    has_chapter,
    title_chapter,
    title,
    story,
    date_last_modify
    }
  }`;
  return request(query, "selectPostStory").then(res => {
    console.log(res);
    dispatch(res);
  });
};
