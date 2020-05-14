import request from "../../lib/request";

export const selectStoryUser = (id_user, dispatch) => {

  const query = `query{
  selectStoryUser(id_user:"` + id_user + `"){
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
  return request(query, 'selectStoryUser').then(
    (res) => {
      dispatch(res)
    }
  );
};