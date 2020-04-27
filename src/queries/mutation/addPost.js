export const addPost = (
  hash
) => {
  console.log(hash)
  return (
    `mutation{
          addPost(
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
        }`)
};