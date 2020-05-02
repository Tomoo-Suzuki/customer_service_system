export default {
  updateAccount(context, newAccount) {
    context.commit("updateAccount", newAccount);
  },
  updateLogin(context, newLogin) {
    context.commit("updateLogin", newLogin);
  },
  updateStory({
    commit
  }, newStory) {
    commit("updateStory", newStory);
  },
  updatePost({
    commit
  }, newPost) {
    commit("updatePost", newPost);
  }
};