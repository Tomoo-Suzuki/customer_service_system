// import formDataToHash from "../../lib/formDataToHash";
import request from "../../lib/request";

export const insertPost = (hash, dispatch) => {
  console.log(hash)
  // const hash = formDataToHash(form);
  const query = `mutation{
          insertPost(
            id_story:"` + hash.id_story + `",
            id_post:"` + hash.id_post + `",
            has_chapter:` + Boolean(hash.has_chapter) + `,
            title_chapter:"` + hash.title_chapter + `",
            title:"` + hash.title + `",
            story:"` + hash.story + `",
            date_last_modify:"` + hash.date_last_modify + `"
          ){
          id_post,
          has_chapter,
          title_chapter,
          title,
          story,
          date_last_modify
          }
        }`;
  return request(query, 'insertPost').then(
    (res) => {
      dispatch(res)
    }
  );
};