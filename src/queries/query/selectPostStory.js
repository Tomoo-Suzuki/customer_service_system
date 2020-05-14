import request from "../../lib/request";

export const selectPostStory = (id_story, dispatch) => {
  const query = `query{
    selectPostStory(id_story:"` + id_story + `"){
    id_story,
    id_post,
    has_chapter,
    title_chapter,
    title,
    story,
    date_last_modify
    }
  }`;
  return request(query, 'selectPostStory').then(
    (res) => {
      console.log(res)
      dispatch(res)
    }
  );
};