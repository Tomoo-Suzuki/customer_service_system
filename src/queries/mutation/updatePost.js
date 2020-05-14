// import formDataToHash from "../../lib/formDataToHash";
import request from "../../lib/request";

export const updatePost = (hash, dispatch) => {
  // const hash = formDataToHash(form);
  const query = `mutation{
          updatePost(id_post:"` + hash.id_post + `",
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
  return request(query, 'updatePost').then(
    (res) => {
      dispatch(res)
    }
  );
};