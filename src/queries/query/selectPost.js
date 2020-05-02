export const selectPost = `query{
  selectPost(id_post:"sf000001000"){
  id_story,
  id_post,
  has_chapter,
  title_chapter,
  title,
  story,
  title_bk,
  story_bk,
  date_last_modify
  }
}`