import request from "../../lib/request";

export const selectPost = (idPost, dispatch) => {
  const query =
    `query{
    selectPost(id_post:"` +
    idPost +
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
  return request(query, "selectPost").then(res => {
    dispatch(res);
  });
};
