import request from "../../lib/request";

export const selectStory = (id_story, dispatch) => {

  const query = `query{
  selectStory(id_story:"` + id_story + `"){
    id,
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
  return request(query, 'selectStory').then(
    (res) => {
      console.log(res)

      dispatch(res)
    }
  );
};