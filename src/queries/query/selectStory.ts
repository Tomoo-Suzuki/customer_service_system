import request from "@/lib/request";

export const selectStory = (idStory, dispatch) => {
  const query =
    `query{
  selectStory(id_story:"` +
    idStory +
    `"){
    id_user,
    id_story,
    title_main,
    auther_name,
    is_complete,
    genre,
    catch_copy,
    synopsis,
    keywords,
    extreme_depiction,
    color_type,
    accept_advertisement,
    accept_rating,
    accept_reviews,
    accept_impression,
    publish_evaluation,
    accept_typo_reports
    }
  }`;
  return request(query, "selectStory").then(res => {
    dispatch(res);
  });
};
